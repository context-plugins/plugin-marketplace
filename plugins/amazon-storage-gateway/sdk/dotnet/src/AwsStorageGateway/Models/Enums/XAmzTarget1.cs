using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 StorageGateway20130630ListVolumes = new("StorageGateway_20130630.ListVolumes");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListVolumes, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListVolumes => onStorageGateway20130630ListVolumes(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListVolumes, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListVolumes) onStorageGateway20130630ListVolumes();
        else otherwise(Value);
    }
}
