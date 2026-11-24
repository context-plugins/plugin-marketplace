using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Filter by certificate type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Imported = new("IMPORTED");

    public static readonly Type1 AmazonIssued = new("AMAZON_ISSUED");

    public static readonly Type1 Private = new("PRIVATE");

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
