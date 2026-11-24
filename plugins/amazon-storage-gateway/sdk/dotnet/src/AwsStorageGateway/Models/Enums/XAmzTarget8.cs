using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 StorageGateway20130630AddCache = new("StorageGateway_20130630.AddCache");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630AddCache, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630AddCache => onStorageGateway20130630AddCache(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630AddCache, Action<string> otherwise)
    {
        if (this == StorageGateway20130630AddCache) onStorageGateway20130630AddCache();
        else otherwise(Value);
    }
}
