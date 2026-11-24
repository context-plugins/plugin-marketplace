using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget56>))]
public sealed record XAmzTarget56 : OpenStringEnum<XAmzTarget56>
{
    private XAmzTarget56(string value) : base(value)
    {
    }

    public static readonly XAmzTarget56 StorageGateway20130630DisableGateway = new(
        "StorageGateway_20130630.DisableGateway");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DisableGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DisableGateway => onStorageGateway20130630DisableGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DisableGateway, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DisableGateway) onStorageGateway20130630DisableGateway();
        else otherwise(Value);
    }
}
