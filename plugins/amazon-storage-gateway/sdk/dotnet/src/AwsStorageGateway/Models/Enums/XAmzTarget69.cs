using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget69>))]
public sealed record XAmzTarget69 : OpenStringEnum<XAmzTarget69>
{
    private XAmzTarget69(string value) : base(value)
    {
    }

    public static readonly XAmzTarget69 StorageGateway20130630UpdateFileSystemAssociation = new(
        "StorageGateway_20130630.UpdateFileSystemAssociation");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateFileSystemAssociation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateFileSystemAssociation => onStorageGateway20130630UpdateFileSystemAssociation(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateFileSystemAssociation, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630UpdateFileSystemAssociation) onStorageGateway20130630UpdateFileSystemAssociation();
        else otherwise(Value);
    }
}
