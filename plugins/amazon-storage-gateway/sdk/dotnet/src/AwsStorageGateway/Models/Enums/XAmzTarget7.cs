using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 StorageGateway20130630ShutdownGateway = new(
        "StorageGateway_20130630.ShutdownGateway");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ShutdownGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ShutdownGateway => onStorageGateway20130630ShutdownGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ShutdownGateway, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ShutdownGateway) onStorageGateway20130630ShutdownGateway();
        else otherwise(Value);
    }
}
