using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Identifies the Amazon Web Services service that manages the certificate issued by ACM.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ManagedBy>))]
public sealed record ManagedBy : OpenStringEnum<ManagedBy>
{
    private ManagedBy(string value) : base(value)
    {
    }

    public static readonly ManagedBy Cloudfront = new("CLOUDFRONT");

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
