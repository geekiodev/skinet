using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser{
                    DisplayName = "Akin",
                    Email = "akin@test.com",
                    UserName = "akin@test.com",
                    Address = new Address{
                        FirstName = "Akin",
                        LastName = "Kolawole",
                        Street = "123 Main Street",
                        City = "Atlanta",
                        State = "GA",
                        ZipCode = "30328"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd"); 
            }
            
        }
    }
}