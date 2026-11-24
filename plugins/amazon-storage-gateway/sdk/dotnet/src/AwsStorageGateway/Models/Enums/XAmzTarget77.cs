using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget77>))]
public sealed record XAmzTarget77 : OpenStringEnum<XAmzTarget77>
{
    private XAmzTarget77(string value) : base(value)
    {
    }

    public static readonly XAmzTarget77 StorageGateway20130630ListVolumeInitiators = new(
        "StorageGateway_20130630.ListVolumeInitiators");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListVolumeInitiators,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListVolumeInitiators => onStorageGateway20130630ListVolumeInitiators(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListVolumeInitiators, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListVolumeInitiators) onStorageGateway20130630ListVolumeInitiators();
        else otherwise(Value);
    }
}
