using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget74>))]
public sealed record XAmzTarget74 : OpenStringEnum<XAmzTarget74>
{
    private XAmzTarget74(string value) : base(value)
    {
    }

    public static readonly XAmzTarget74 StorageGateway20130630DescribeTapeRecoveryPoints = new(
        "StorageGateway_20130630.DescribeTapeRecoveryPoints");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeTapeRecoveryPoints,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeTapeRecoveryPoints => onStorageGateway20130630DescribeTapeRecoveryPoints(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeTapeRecoveryPoints, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeTapeRecoveryPoints) onStorageGateway20130630DescribeTapeRecoveryPoints();
        else otherwise(Value);
    }
}
