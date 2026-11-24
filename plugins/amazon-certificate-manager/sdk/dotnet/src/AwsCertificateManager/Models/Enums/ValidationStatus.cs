using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The validation status of the domain name. This can be one of the following values: PENDING_VALIDATION SUCCESS FAILED
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationStatus>))]
public sealed record ValidationStatus : OpenStringEnum<ValidationStatus>
{
    private ValidationStatus(string value) : base(value)
    {
    }

    public static readonly ValidationStatus PendingValidation = new("PENDING_VALIDATION");

    public static readonly ValidationStatus Success = new("SUCCESS");

    public static readonly ValidationStatus Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPendingValidation,
        Func<TResult> onSuccess,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PendingValidation => onPendingValidation(),
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPendingValidation, Action onSuccess, Action onFailed, Action<string> otherwise)
    {
        if (this == PendingValidation) onPendingValidation();
        else if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
