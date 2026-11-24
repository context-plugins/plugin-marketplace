using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget84>))]
public sealed record XAmzTarget84 : OpenStringEnum<XAmzTarget84>
{
    private XAmzTarget84(string value) : base(value)
    {
    }

    public static readonly XAmzTarget84 StorageGateway20130630UpdateSmbSecurityStrategy = new(
        "StorageGateway_20130630.UpdateSMBSecurityStrategy");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateSmbSecurityStrategy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateSmbSecurityStrategy => onStorageGateway20130630UpdateSmbSecurityStrategy(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateSmbSecurityStrategy, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630UpdateSmbSecurityStrategy) onStorageGateway20130630UpdateSmbSecurityStrategy();
        else otherwise(Value);
    }
}
