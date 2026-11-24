using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsStorageGatewayCacheReportApi>))]
public sealed record XAmzTarget3AwsStorageGatewayCacheReportApi : OpenStringEnum<XAmzTarget3AwsStorageGatewayCacheReportApi>
{
    private XAmzTarget3AwsStorageGatewayCacheReportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsStorageGatewayCacheReportApi StorageGateway20130630ListCacheReports = new(
        "StorageGateway_20130630.ListCacheReports");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListCacheReports,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListCacheReports => onStorageGateway20130630ListCacheReports(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListCacheReports, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListCacheReports) onStorageGateway20130630ListCacheReports();
        else otherwise(Value);
    }
}
