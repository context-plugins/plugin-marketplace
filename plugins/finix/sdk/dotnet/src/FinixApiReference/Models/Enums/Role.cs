using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the level of access the <see href="#Users"><c>User</c></see> has available.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role RolePlatform = new("ROLE_PLATFORM");

    public static readonly Role RolePartner = new("ROLE_PARTNER");

    public static readonly Role RoleMerchant = new("ROLE_MERCHANT");

    public TResult Match<TResult>(Func<TResult> onRolePlatform,
        Func<TResult> onRolePartner,
        Func<TResult> onRoleMerchant,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RolePlatform => onRolePlatform(),
            _ when this == RolePartner => onRolePartner(),
            _ when this == RoleMerchant => onRoleMerchant(),
            _ => otherwise(Value)
        };

    public void Match(Action onRolePlatform, Action onRolePartner, Action onRoleMerchant, Action<string> otherwise)
    {
        if (this == RolePlatform) onRolePlatform();
        else if (this == RolePartner) onRolePartner();
        else if (this == RoleMerchant) onRoleMerchant();
        else otherwise(Value);
    }
}
