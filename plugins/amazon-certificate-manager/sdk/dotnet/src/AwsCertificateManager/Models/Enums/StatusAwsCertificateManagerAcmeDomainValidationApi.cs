using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The status of the domain validation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsCertificateManagerAcmeDomainValidationApi>))]
public sealed record StatusAwsCertificateManagerAcmeDomainValidationApi : OpenStringEnum<StatusAwsCertificateManagerAcmeDomainValidationApi>
{
    private StatusAwsCertificateManagerAcmeDomainValidationApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsCertificateManagerAcmeDomainValidationApi Validating = new("VALIDATING");

    public static readonly StatusAwsCertificateManagerAcmeDomainValidationApi Valid = new("VALID");

    public static readonly StatusAwsCertificateManagerAcmeDomainValidationApi Invalid = new("INVALID");

    public static readonly StatusAwsCertificateManagerAcmeDomainValidationApi Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onValidating,
        Func<TResult> onValid,
        Func<TResult> onInvalid,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Validating => onValidating(),
            _ when this == Valid => onValid(),
            _ when this == Invalid => onInvalid(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidating,
        Action onValid,
        Action onInvalid,
        Action onDeleting,
        Action<string> otherwise)
    {
        if (this == Validating) onValidating();
        else if (this == Valid) onValid();
        else if (this == Invalid) onInvalid();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
