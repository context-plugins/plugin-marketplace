using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget22>))]
public sealed record XAmzTarget22 : OpenStringEnum<XAmzTarget22>
{
    private XAmzTarget22(string value) : base(value)
    {
    }

    public static readonly XAmzTarget22 StorageGateway20130630DetachVolume = new(
        "StorageGateway_20130630.DetachVolume");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DetachVolume,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DetachVolume => onStorageGateway20130630DetachVolume(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DetachVolume, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DetachVolume) onStorageGateway20130630DetachVolume();
        else otherwise(Value);
    }
}
