using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

/// <summary>
/// The algorithm used by Amazon EBS to generate the checksum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChecksumAlgorithm1>))]
public sealed record ChecksumAlgorithm1 : OpenStringEnum<ChecksumAlgorithm1>
{
    private ChecksumAlgorithm1(string value) : base(value)
    {
    }

    public static readonly ChecksumAlgorithm1 Sha256 = new("SHA256");

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
