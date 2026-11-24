using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget14>))]
public sealed record XAmzTarget14 : OpenStringEnum<XAmzTarget14>
{
    private XAmzTarget14(string value) : base(value)
    {
    }

    public static readonly XAmzTarget14 StorageGateway20130630AddUploadBuffer = new(
        "StorageGateway_20130630.AddUploadBuffer");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630AddUploadBuffer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630AddUploadBuffer => onStorageGateway20130630AddUploadBuffer(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630AddUploadBuffer, Action<string> otherwise)
    {
        if (this == StorageGateway20130630AddUploadBuffer) onStorageGateway20130630AddUploadBuffer();
        else otherwise(Value);
    }
}
