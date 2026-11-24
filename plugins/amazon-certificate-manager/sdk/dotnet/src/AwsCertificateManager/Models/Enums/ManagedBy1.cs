using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by the entity that manages the certificate.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ManagedBy1>))]
public sealed record ManagedBy1 : OpenStringEnum<ManagedBy1>
{
    private ManagedBy1(string value) : base(value)
    {
    }

    public static readonly ManagedBy1 Cloudfront = new("CLOUDFRONT");

    public TResult Match<TResult>(Func<TResult> onCloudfront, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cloudfront => onCloudfront(),
            _ => otherwise(Value)
        };

    public void Match(Action onCloudfront, Action<string> otherwise)
    {
        if (this == Cloudfront) onCloudfront();
        else otherwise(Value);
    }
}
