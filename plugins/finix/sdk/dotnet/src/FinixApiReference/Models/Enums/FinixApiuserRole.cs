using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FinixApiuserRole>))]
public sealed record FinixApiuserRole : OpenStringEnum<FinixApiuserRole>
{
    private FinixApiuserRole(string value) : base(value)
    {
    }

    public static readonly FinixApiuserRole RolePlatform = new("ROLE_PLATFORM");

    public static readonly FinixApiuserRole RolePartner = new("ROLE_PARTNER");

    public static readonly FinixApiuserRole RoleMerchant = new("ROLE_MERCHANT");

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
