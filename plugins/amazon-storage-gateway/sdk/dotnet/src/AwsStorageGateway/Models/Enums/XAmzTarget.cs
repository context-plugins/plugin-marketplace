using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget StorageGateway20130630ActivateGateway = new(
        "StorageGateway_20130630.ActivateGateway");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ActivateGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ActivateGateway => onStorageGateway20130630ActivateGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ActivateGateway, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ActivateGateway) onStorageGateway20130630ActivateGateway();
        else otherwise(Value);
    }
}
