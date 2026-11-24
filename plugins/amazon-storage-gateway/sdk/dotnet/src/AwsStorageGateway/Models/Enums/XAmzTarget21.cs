using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21>))]
public sealed record XAmzTarget21 : OpenStringEnum<XAmzTarget21>
{
    private XAmzTarget21(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21 StorageGateway20130630DeleteVolume = new(
        "StorageGateway_20130630.DeleteVolume");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteVolume,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DeleteVolume => onStorageGateway20130630DeleteVolume(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteVolume, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteVolume) onStorageGateway20130630DeleteVolume();
        else otherwise(Value);
    }
}
