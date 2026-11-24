using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsStorageGatewayCacheReportApi>))]
public sealed record XAmzTargetAwsStorageGatewayCacheReportApi : OpenStringEnum<XAmzTargetAwsStorageGatewayCacheReportApi>
{
    private XAmzTargetAwsStorageGatewayCacheReportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsStorageGatewayCacheReportApi StorageGateway20130630CancelCacheReport = new(
        "StorageGateway_20130630.CancelCacheReport");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CancelCacheReport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CancelCacheReport => onStorageGateway20130630CancelCacheReport(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CancelCacheReport, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CancelCacheReport) onStorageGateway20130630CancelCacheReport();
        else otherwise(Value);
    }
}
