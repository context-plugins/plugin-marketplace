using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by certificate renewal status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RenewalStatus1>))]
public sealed record RenewalStatus1 : OpenStringEnum<RenewalStatus1>
{
    private RenewalStatus1(string value) : base(value)
    {
    }

    public static readonly RenewalStatus1 PendingAutoRenewal = new("PENDING_AUTO_RENEWAL");

    public static readonly RenewalStatus1 PendingValidation = new("PENDING_VALIDATION");

    public static readonly RenewalStatus1 Success = new("SUCCESS");

    public static readonly RenewalStatus1 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPendingAutoRenewal,
        Func<TResult> onPendingValidation,
        Func<TResult> onSuccess,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PendingAutoRenewal => onPendingAutoRenewal(),
            _ when this == PendingValidation => onPendingValidation(),
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPendingAutoRenewal,
        Action onPendingValidation,
        Action onSuccess,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == PendingAutoRenewal) onPendingAutoRenewal();
        else if (this == PendingValidation) onPendingValidation();
        else if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
