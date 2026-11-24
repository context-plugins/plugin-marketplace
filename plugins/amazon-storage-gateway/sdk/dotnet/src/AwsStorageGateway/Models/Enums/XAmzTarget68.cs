using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget68>))]
public sealed record XAmzTarget68 : OpenStringEnum<XAmzTarget68>
{
    private XAmzTarget68(string value) : base(value)
    {
    }

    public static readonly XAmzTarget68 StorageGateway20130630ListFileSystemAssociations = new(
        "StorageGateway_20130630.ListFileSystemAssociations");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListFileSystemAssociations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630ListFileSystemAssociations => onStorageGateway20130630ListFileSystemAssociations(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListFileSystemAssociations, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630ListFileSystemAssociations) onStorageGateway20130630ListFileSystemAssociations();
        else otherwise(Value);
    }
}
