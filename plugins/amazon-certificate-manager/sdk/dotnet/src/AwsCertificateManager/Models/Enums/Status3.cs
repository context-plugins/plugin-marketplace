using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The status of the certificate update. The following are valid values: PENDING_DOMAIN_VALIDATION – The certificate update is waiting for domain ownership validation to complete. SUCCESS – The certificate was updated successfully. FAILED – The certificate update failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 PendingDomainValidation = new("PENDING_DOMAIN_VALIDATION");

    public static readonly Status3 Success = new("SUCCESS");

    public static readonly Status3 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPendingDomainValidation,
        Func<TResult> onSuccess,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PendingDomainValidation => onPendingDomainValidation(),
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPendingDomainValidation, Action onSuccess, Action onFailed, Action<string> otherwise)
    {
        if (this == PendingDomainValidation) onPendingDomainValidation();
        else if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
