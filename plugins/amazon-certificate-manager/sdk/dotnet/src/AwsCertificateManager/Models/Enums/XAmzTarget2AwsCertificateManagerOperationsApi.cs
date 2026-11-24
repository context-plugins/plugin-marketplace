using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCertificateManagerOperationsApi>))]
public sealed record XAmzTarget2AwsCertificateManagerOperationsApi : OpenStringEnum<XAmzTarget2AwsCertificateManagerOperationsApi>
{
    private XAmzTarget2AwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCertificateManagerOperationsApi CertificateManagerResendValidationEmail = new(
        "CertificateManager.ResendValidationEmail");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerResendValidationEmail,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerResendValidationEmail => onCertificateManagerResendValidationEmail(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerResendValidationEmail, Action<string> otherwise)
    {
        if (this == CertificateManagerResendValidationEmail) onCertificateManagerResendValidationEmail();
        else otherwise(Value);
    }
}
