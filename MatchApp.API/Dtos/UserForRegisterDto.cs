using System.ComponentModel.DataAnnotations;

namespace MatchApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Please use a password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}