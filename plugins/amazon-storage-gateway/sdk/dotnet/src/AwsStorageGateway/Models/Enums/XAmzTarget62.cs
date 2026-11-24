using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget62>))]
public sealed record XAmzTarget62 : OpenStringEnum<XAmzTarget62>
{
    private XAmzTarget62(string value) : base(value)
    {
    }

    public static readonly XAmzTarget62 StorageGateway20130630DescribeTapeArchives = new(
        "StorageGateway_20130630.DescribeTapeArchives");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeTapeArchives,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DescribeTapeArchives => onStorageGateway20130630DescribeTapeArchives(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeTapeArchives, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeTapeArchives) onStorageGateway20130630DescribeTapeArchives();
        else otherwise(Value);
    }
}
