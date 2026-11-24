using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20>))]
public sealed record XAmzTarget20 : OpenStringEnum<XAmzTarget20>
{
    private XAmzTarget20(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20 StorageGateway20130630AttachVolume = new(
        "StorageGateway_20130630.AttachVolume");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630AttachVolume,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630AttachVolume => onStorageGateway20130630AttachVolume(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630AttachVolume, Action<string> otherwise)
    {
        if (this == StorageGateway20130630AttachVolume) onStorageGateway20130630AttachVolume();
        else otherwise(Value);
    }
}
