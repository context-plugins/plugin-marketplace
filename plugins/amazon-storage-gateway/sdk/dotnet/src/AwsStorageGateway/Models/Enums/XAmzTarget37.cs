using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget37>))]
public sealed record XAmzTarget37 : OpenStringEnum<XAmzTarget37>
{
    private XAmzTarget37(string value) : base(value)
    {
    }

    public static readonly XAmzTarget37 StorageGateway20130630DeleteTapePool = new(
        "StorageGateway_20130630.DeleteTapePool");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteTapePool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DeleteTapePool => onStorageGateway20130630DeleteTapePool(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteTapePool, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteTapePool) onStorageGateway20130630DeleteTapePool();
        else otherwise(Value);
    }
}
