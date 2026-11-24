using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget61>))]
public sealed record XAmzTarget61 : OpenStringEnum<XAmzTarget61>
{
    private XAmzTarget61(string value) : base(value)
    {
    }

    public static readonly XAmzTarget61 StorageGateway20130630DeleteTapeArchive = new(
        "StorageGateway_20130630.DeleteTapeArchive");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteTapeArchive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DeleteTapeArchive => onStorageGateway20130630DeleteTapeArchive(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteTapeArchive, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteTapeArchive) onStorageGateway20130630DeleteTapeArchive();
        else otherwise(Value);
    }
}
