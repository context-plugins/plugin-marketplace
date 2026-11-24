using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The status of ACM's managed renewal of the certificate.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RenewalStatus2>))]
public sealed record RenewalStatus2 : OpenStringEnum<RenewalStatus2>
{
    private RenewalStatus2(string value) : base(value)
    {
    }

    public static readonly RenewalStatus2 PendingAutoRenewal = new("PENDING_AUTO_RENEWAL");

    public static readonly RenewalStatus2 PendingValidation = new("PENDING_VALIDATION");

    public static readonly RenewalStatus2 Success = new("SUCCESS");

    public static readonly RenewalStatus2 Failed = new("FAILED");

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
