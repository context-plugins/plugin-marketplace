using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsCertificateManagerCertificatesApi>))]
public sealed record XAmzTarget4AwsCertificateManagerCertificatesApi : OpenStringEnum<XAmzTarget4AwsCertificateManagerCertificatesApi>
{
    private XAmzTarget4AwsCertificateManagerCertificatesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsCertificateManagerCertificatesApi CertificateManagerImportCertificate = new(
        "CertificateManager.ImportCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerImportCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerImportCertificate => onCertificateManagerImportCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerImportCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerImportCertificate) onCertificateManagerImportCertificate();
        else otherwise(Value);
    }
}
