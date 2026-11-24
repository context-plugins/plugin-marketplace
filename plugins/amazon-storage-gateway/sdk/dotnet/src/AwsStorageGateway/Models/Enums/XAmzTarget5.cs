using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 StorageGateway20130630RetrieveTapeArchive = new(
        "StorageGateway_20130630.RetrieveTapeArchive");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630RetrieveTapeArchive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630RetrieveTapeArchive => onStorageGateway20130630RetrieveTapeArchive(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630RetrieveTapeArchive, Action<string> otherwise)
    {
        if (this == StorageGateway20130630RetrieveTapeArchive) onStorageGateway20130630RetrieveTapeArchive();
        else otherwise(Value);
    }
}
