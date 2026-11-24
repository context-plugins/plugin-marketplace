using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see Importing Certificates in the Certificate Manager User Guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAwsCertificateManagerCertificatesApi>))]
public sealed record TypeAwsCertificateManagerCertificatesApi : OpenStringEnum<TypeAwsCertificateManagerCertificatesApi>
{
    private TypeAwsCertificateManagerCertificatesApi(string value) : base(value)
    {
    }

    public static readonly TypeAwsCertificateManagerCertificatesApi Imported = new("IMPORTED");

    public static readonly TypeAwsCertificateManagerCertificatesApi AmazonIssued = new("AMAZON_ISSUED");

    public static readonly TypeAwsCertificateManagerCertificatesApi Private = new("PRIVATE");

    public TResult Match<TResult>(Func<TResult> onImported,
        Func<TResult> onAmazonIssued,
        Func<TResult> onPrivate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Imported => onImported(),
            _ when this == AmazonIssued => onAmazonIssued(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onImported, Action onAmazonIssued, Action onPrivate, Action<string> otherwise)
    {
        if (this == Imported) onImported();
        else if (this == AmazonIssued) onAmazonIssued();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
