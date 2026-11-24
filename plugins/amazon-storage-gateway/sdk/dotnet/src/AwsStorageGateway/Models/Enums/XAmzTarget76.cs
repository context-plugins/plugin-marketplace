using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget76>))]
public sealed record XAmzTarget76 : OpenStringEnum<XAmzTarget76>
{
    private XAmzTarget76(string value) : base(value)
    {
    }

    public static readonly XAmzTarget76 StorageGateway20130630ListLocalDisks = new(
        "StorageGateway_20130630.ListLocalDisks");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListLocalDisks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListLocalDisks => onStorageGateway20130630ListLocalDisks(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListLocalDisks, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListLocalDisks) onStorageGateway20130630ListLocalDisks();
        else otherwise(Value);
    }
}
