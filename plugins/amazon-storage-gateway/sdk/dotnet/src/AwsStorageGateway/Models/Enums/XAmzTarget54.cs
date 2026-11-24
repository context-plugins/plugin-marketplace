using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget54>))]
public sealed record XAmzTarget54 : OpenStringEnum<XAmzTarget54>
{
    private XAmzTarget54(string value) : base(value)
    {
    }

    public static readonly XAmzTarget54 StorageGateway20130630ListFileShares = new(
        "StorageGateway_20130630.ListFileShares");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListFileShares,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListFileShares => onStorageGateway20130630ListFileShares(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListFileShares, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListFileShares) onStorageGateway20130630ListFileShares();
        else otherwise(Value);
    }
}
