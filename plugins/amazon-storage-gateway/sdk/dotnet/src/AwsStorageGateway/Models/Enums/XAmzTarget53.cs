using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget53>))]
public sealed record XAmzTarget53 : OpenStringEnum<XAmzTarget53>
{
    private XAmzTarget53(string value) : base(value)
    {
    }

    public static readonly XAmzTarget53 StorageGateway20130630DeleteFileShare = new(
        "StorageGateway_20130630.DeleteFileShare");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteFileShare,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DeleteFileShare => onStorageGateway20130630DeleteFileShare(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteFileShare, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteFileShare) onStorageGateway20130630DeleteFileShare();
        else otherwise(Value);
    }
}
