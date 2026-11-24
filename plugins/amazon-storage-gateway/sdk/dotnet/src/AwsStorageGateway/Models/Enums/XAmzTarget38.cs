using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget38>))]
public sealed record XAmzTarget38 : OpenStringEnum<XAmzTarget38>
{
    private XAmzTarget38(string value) : base(value)
    {
    }

    public static readonly XAmzTarget38 StorageGateway20130630ListTapePools = new(
        "StorageGateway_20130630.ListTapePools");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListTapePools,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListTapePools => onStorageGateway20130630ListTapePools(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListTapePools, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListTapePools) onStorageGateway20130630ListTapePools();
        else otherwise(Value);
    }
}
