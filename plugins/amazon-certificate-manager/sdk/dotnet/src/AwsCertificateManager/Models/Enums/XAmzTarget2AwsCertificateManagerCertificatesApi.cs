using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsCertificateManagerCertificatesApi>))]
public sealed record XAmzTarget2AwsCertificateManagerCertificatesApi : OpenStringEnum<XAmzTarget2AwsCertificateManagerCertificatesApi>
{
    private XAmzTarget2AwsCertificateManagerCertificatesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsCertificateManagerCertificatesApi CertificateManagerExportCertificate = new(
        "CertificateManager.ExportCertificate");

    public TResult Match<TResult>(Func<TResult> onCertificateManagerExportCertificate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CertificateManagerExportCertificate => onCertificateManagerExportCertificate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCertificateManagerExportCertificate, Action<string> otherwise)
    {
        if (this == CertificateManagerExportCertificate) onCertificateManagerExportCertificate();
        else otherwise(Value);
    }
}
