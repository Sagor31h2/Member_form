using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Member_form_.net5_with_angular11.Models
{
    public class Member
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName="nvarchar=(50)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar=(50)")]
        public string MiddleName { get; set; }

        [Column(TypeName = "nvarchar=(50)")]
        public string LastName { get; set; }
    }
}
