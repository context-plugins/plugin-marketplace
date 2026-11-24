using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget16>))]
public sealed record XAmzTarget16 : OpenStringEnum<XAmzTarget16>
{
    private XAmzTarget16(string value) : base(value)
    {
    }

    public static readonly XAmzTarget16 StorageGateway20130630AddWorkingStorage = new(
        "StorageGateway_20130630.AddWorkingStorage");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630AddWorkingStorage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630AddWorkingStorage => onStorageGateway20130630AddWorkingStorage(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630AddWorkingStorage, Action<string> otherwise)
    {
        if (this == StorageGateway20130630AddWorkingStorage) onStorageGateway20130630AddWorkingStorage();
        else otherwise(Value);
    }
}
