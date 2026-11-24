using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget55>))]
public sealed record XAmzTarget55 : OpenStringEnum<XAmzTarget55>
{
    private XAmzTarget55(string value) : base(value)
    {
    }

    public static readonly XAmzTarget55 StorageGateway20130630DeleteGateway = new(
        "StorageGateway_20130630.DeleteGateway");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DeleteGateway => onStorageGateway20130630DeleteGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteGateway, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteGateway) onStorageGateway20130630DeleteGateway();
        else otherwise(Value);
    }
}
