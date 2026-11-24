using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Bank account user verification status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrganizationBankAccountUserStatus>))]
public sealed record OrganizationBankAccountUserStatus : OpenStringEnum<OrganizationBankAccountUserStatus>
{
    private OrganizationBankAccountUserStatus(string value) : base(value)
    {
    }

    public static readonly OrganizationBankAccountUserStatus Unverified = new("UNVERIFIED");

    public static readonly OrganizationBankAccountUserStatus Nominated = new("NOMINATED");

    public static readonly OrganizationBankAccountUserStatus Verified = new("VERIFIED");

    public static readonly OrganizationBankAccountUserStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onUnverified,
        Func<TResult> onNominated,
        Func<TResult> onVerified,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unverified => onUnverified(),
            _ when this == Nominated => onNominated(),
            _ when this == Verified => onVerified(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnverified,
        Action onNominated,
        Action onVerified,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Unverified) onUnverified();
        else if (this == Nominated) onNominated();
        else if (this == Verified) onVerified();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
