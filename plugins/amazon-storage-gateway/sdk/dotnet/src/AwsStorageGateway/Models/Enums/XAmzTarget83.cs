using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget83>))]
public sealed record XAmzTarget83 : OpenStringEnum<XAmzTarget83>
{
    private XAmzTarget83(string value) : base(value)
    {
    }

    public static readonly XAmzTarget83 StorageGateway20130630UpdateSmbLocalGroups = new(
        "StorageGateway_20130630.UpdateSMBLocalGroups");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateSmbLocalGroups,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630UpdateSmbLocalGroups => onStorageGateway20130630UpdateSmbLocalGroups(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateSmbLocalGroups, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateSmbLocalGroups) onStorageGateway20130630UpdateSmbLocalGroups();
        else otherwise(Value);
    }
}
