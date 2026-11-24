using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzChecksumAlgorithm>))]
public sealed record XAmzChecksumAlgorithm : OpenStringEnum<XAmzChecksumAlgorithm>
{
    private XAmzChecksumAlgorithm(string value) : base(value)
    {
    }

    public static readonly XAmzChecksumAlgorithm Sha256 = new("SHA256");

    public TResult Match<TResult>(Func<TResult> onSha256, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sha256 => onSha256(),
            _ => otherwise(Value)
        };

    public void Match(Action onSha256, Action<string> otherwise)
    {
        if (this == Sha256) onSha256();
        else otherwise(Value);
    }
}
