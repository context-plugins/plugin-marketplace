using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsStorageGatewayCacheReportApi>))]
public sealed record XAmzTarget2AwsStorageGatewayCacheReportApi : OpenStringEnum<XAmzTarget2AwsStorageGatewayCacheReportApi>
{
    private XAmzTarget2AwsStorageGatewayCacheReportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsStorageGatewayCacheReportApi StorageGateway20130630DescribeCacheReport = new(
        "StorageGateway_20130630.DescribeCacheReport");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeCacheReport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DescribeCacheReport => onStorageGateway20130630DescribeCacheReport(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeCacheReport, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeCacheReport) onStorageGateway20130630DescribeCacheReport();
        else otherwise(Value);
    }
}
