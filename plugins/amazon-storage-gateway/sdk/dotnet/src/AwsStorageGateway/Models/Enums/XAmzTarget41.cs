using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget41>))]
public sealed record XAmzTarget41 : OpenStringEnum<XAmzTarget41>
{
    private XAmzTarget41(string value) : base(value)
    {
    }

    public static readonly XAmzTarget41 StorageGateway20130630DeleteTape = new("StorageGateway_20130630.DeleteTape");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteTape, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DeleteTape => onStorageGateway20130630DeleteTape(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteTape, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteTape) onStorageGateway20130630DeleteTape();
        else otherwise(Value);
    }
}
