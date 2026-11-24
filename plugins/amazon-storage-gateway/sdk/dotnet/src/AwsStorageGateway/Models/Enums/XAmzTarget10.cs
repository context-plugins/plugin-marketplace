using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget10>))]
public sealed record XAmzTarget10 : OpenStringEnum<XAmzTarget10>
{
    private XAmzTarget10(string value) : base(value)
    {
    }

    public static readonly XAmzTarget10 StorageGateway20130630ResetCache = new("StorageGateway_20130630.ResetCache");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ResetCache, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ResetCache => onStorageGateway20130630ResetCache(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ResetCache, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ResetCache) onStorageGateway20130630ResetCache();
        else otherwise(Value);
    }
}
