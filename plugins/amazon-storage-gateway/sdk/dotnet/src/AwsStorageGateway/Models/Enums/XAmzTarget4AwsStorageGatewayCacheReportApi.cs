using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsStorageGatewayCacheReportApi>))]
public sealed record XAmzTarget4AwsStorageGatewayCacheReportApi : OpenStringEnum<XAmzTarget4AwsStorageGatewayCacheReportApi>
{
    private XAmzTarget4AwsStorageGatewayCacheReportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsStorageGatewayCacheReportApi StorageGateway20130630StartCacheReport = new(
        "StorageGateway_20130630.StartCacheReport");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630StartCacheReport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630StartCacheReport => onStorageGateway20130630StartCacheReport(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630StartCacheReport, Action<string> otherwise)
    {
        if (this == StorageGateway20130630StartCacheReport) onStorageGateway20130630StartCacheReport();
        else otherwise(Value);
    }
}
