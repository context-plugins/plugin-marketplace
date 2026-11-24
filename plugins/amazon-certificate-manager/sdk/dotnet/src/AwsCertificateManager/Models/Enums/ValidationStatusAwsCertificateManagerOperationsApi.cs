using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The validation status for this domain. Valid values: PENDING_VALIDATION – The domain is waiting for validation to complete. SUCCESS – Validation completed successfully. FAILED – Validation failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ValidationStatusAwsCertificateManagerOperationsApi>))]
public sealed record ValidationStatusAwsCertificateManagerOperationsApi : OpenStringEnum<ValidationStatusAwsCertificateManagerOperationsApi>
{
    private ValidationStatusAwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly ValidationStatusAwsCertificateManagerOperationsApi PendingValidation = new(
        "PENDING_VALIDATION");

    public static readonly ValidationStatusAwsCertificateManagerOperationsApi Success = new("SUCCESS");

    public static readonly ValidationStatusAwsCertificateManagerOperationsApi Failed = new("FAILED");

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
