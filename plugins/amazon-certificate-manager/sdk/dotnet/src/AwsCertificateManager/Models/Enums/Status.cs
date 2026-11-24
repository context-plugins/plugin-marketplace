using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The status of the ACME account.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Valid = new("VALID");

    public static readonly Status Deactivated = new("DEACTIVATED");

    public static readonly Status Revoked = new("REVOKED");

    public TResult Match<TResult>(Func<TResult> onValid,
        Func<TResult> onDeactivated,
        Func<TResult> onRevoked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Valid => onValid(),
            _ when this == Deactivated => onDeactivated(),
            _ when this == Revoked => onRevoked(),
            _ => otherwise(Value)
        };

    public void Match(Action onValid, Action onDeactivated, Action onRevoked, Action<string> otherwise)
    {
        if (this == Valid) onValid();
        else if (this == Deactivated) onDeactivated();
        else if (this == Revoked) onRevoked();
        else otherwise(Value);
    }
}
