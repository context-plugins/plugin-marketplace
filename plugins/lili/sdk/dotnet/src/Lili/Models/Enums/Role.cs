using System;
using System.Text.Json.Serialization;
using Lili.Core.Enum;

namespace Lili.Models.Enums;

/// <summary>
/// The UBO role in the account
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Partner = new("PARTNER");

    public static readonly Role PartnerFullAccess = new("PARTNER_FULL_ACCESS");

    public TResult Match<TResult>(Func<TResult> onPartner,
        Func<TResult> onPartnerFullAccess,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Partner => onPartner(),
            _ when this == PartnerFullAccess => onPartnerFullAccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onPartner, Action onPartnerFullAccess, Action<string> otherwise)
    {
        if (this == Partner) onPartner();
        else if (this == PartnerFullAccess) onPartnerFullAccess();
        else otherwise(Value);
    }
}
