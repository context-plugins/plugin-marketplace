using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Card account user verification status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrganizationCardAccountUserStatus>))]
public sealed record OrganizationCardAccountUserStatus : OpenStringEnum<OrganizationCardAccountUserStatus>
{
    private OrganizationCardAccountUserStatus(string value) : base(value)
    {
    }

    public static readonly OrganizationCardAccountUserStatus Unverified = new("UNVERIFIED");

    public static readonly OrganizationCardAccountUserStatus Nominated = new("NOMINATED");

    public static readonly OrganizationCardAccountUserStatus Verified = new("VERIFIED");

    public static readonly OrganizationCardAccountUserStatus Undefined = new("UNDEFINED");

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
