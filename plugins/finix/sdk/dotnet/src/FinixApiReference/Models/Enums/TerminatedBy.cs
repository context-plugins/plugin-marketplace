using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The role that initiated the termination. If the API key belongs to the <c>USER</c> role, the following values will be returned:
///   - If the role is <c>ROLE_PLATFORM</c>, it will return <c>PLATFORM_USER</c>.
///   - If the role is <c>ROLE_PARTNER</c>, it will return <c>PARTNER_USER</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TerminatedBy>))]
public sealed record TerminatedBy : OpenStringEnum<TerminatedBy>
{
    private TerminatedBy(string value) : base(value)
    {
    }

    public static readonly TerminatedBy PlatformUser = new("PLATFORM_USER");

    public static readonly TerminatedBy PartnerUser = new("PARTNER_USER");

    public TResult Match<TResult>(Func<TResult> onPlatformUser,
        Func<TResult> onPartnerUser,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PlatformUser => onPlatformUser(),
            _ when this == PartnerUser => onPartnerUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlatformUser, Action onPartnerUser, Action<string> otherwise)
    {
        if (this == PlatformUser) onPlatformUser();
        else if (this == PartnerUser) onPartnerUser();
        else otherwise(Value);
    }
}
