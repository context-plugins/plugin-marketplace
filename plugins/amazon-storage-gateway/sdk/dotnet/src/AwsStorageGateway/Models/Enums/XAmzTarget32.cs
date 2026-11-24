using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget32>))]
public sealed record XAmzTarget32 : OpenStringEnum<XAmzTarget32>
{
    private XAmzTarget32(string value) : base(value)
    {
    }

    public static readonly XAmzTarget32 StorageGateway20130630CreateSnapshot = new(
        "StorageGateway_20130630.CreateSnapshot");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateSnapshot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CreateSnapshot => onStorageGateway20130630CreateSnapshot(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateSnapshot, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateSnapshot) onStorageGateway20130630CreateSnapshot();
        else otherwise(Value);
    }
}
