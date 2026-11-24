using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The type of update that was requested for the certificate. The following are valid values: DOMAIN_VALIDATION_METHOD – The update changes the domain validation method for the certificate.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 DomainValidationMethod = new("DOMAIN_VALIDATION_METHOD");

    public TResult Match<TResult>(Func<TResult> onDomainValidationMethod, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DomainValidationMethod => onDomainValidationMethod(),
            _ => otherwise(Value)
        };

    public void Match(Action onDomainValidationMethod, Action<string> otherwise)
    {
        if (this == DomainValidationMethod) onDomainValidationMethod();
        else otherwise(Value);
    }
}
