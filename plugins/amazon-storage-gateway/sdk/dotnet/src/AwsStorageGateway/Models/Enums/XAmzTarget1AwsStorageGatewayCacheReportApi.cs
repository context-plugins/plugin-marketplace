using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsStorageGatewayCacheReportApi>))]
public sealed record XAmzTarget1AwsStorageGatewayCacheReportApi : OpenStringEnum<XAmzTarget1AwsStorageGatewayCacheReportApi>
{
    private XAmzTarget1AwsStorageGatewayCacheReportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsStorageGatewayCacheReportApi StorageGateway20130630DeleteCacheReport = new(
        "StorageGateway_20130630.DeleteCacheReport");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteCacheReport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DeleteCacheReport => onStorageGateway20130630DeleteCacheReport(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteCacheReport, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteCacheReport) onStorageGateway20130630DeleteCacheReport();
        else otherwise(Value);
    }
}
