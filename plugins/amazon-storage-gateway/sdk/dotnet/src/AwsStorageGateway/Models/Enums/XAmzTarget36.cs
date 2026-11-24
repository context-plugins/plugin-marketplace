using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget36>))]
public sealed record XAmzTarget36 : OpenStringEnum<XAmzTarget36>
{
    private XAmzTarget36(string value) : base(value)
    {
    }

    public static readonly XAmzTarget36 StorageGateway20130630CreateTapePool = new(
        "StorageGateway_20130630.CreateTapePool");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateTapePool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CreateTapePool => onStorageGateway20130630CreateTapePool(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateTapePool, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateTapePool) onStorageGateway20130630CreateTapePool();
        else otherwise(Value);
    }
}
