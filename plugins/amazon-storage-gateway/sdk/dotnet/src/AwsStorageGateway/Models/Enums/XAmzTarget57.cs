using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget57>))]
public sealed record XAmzTarget57 : OpenStringEnum<XAmzTarget57>
{
    private XAmzTarget57(string value) : base(value)
    {
    }

    public static readonly XAmzTarget57 StorageGateway20130630StartGateway = new(
        "StorageGateway_20130630.StartGateway");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630StartGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630StartGateway => onStorageGateway20130630StartGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630StartGateway, Action<string> otherwise)
    {
        if (this == StorageGateway20130630StartGateway) onStorageGateway20130630StartGateway();
        else otherwise(Value);
    }
}
