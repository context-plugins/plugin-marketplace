using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget18>))]
public sealed record XAmzTarget18 : OpenStringEnum<XAmzTarget18>
{
    private XAmzTarget18(string value) : base(value)
    {
    }

    public static readonly XAmzTarget18 StorageGateway20130630AssociateFileSystem = new(
        "StorageGateway_20130630.AssociateFileSystem");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630AssociateFileSystem,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630AssociateFileSystem => onStorageGateway20130630AssociateFileSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630AssociateFileSystem, Action<string> otherwise)
    {
        if (this == StorageGateway20130630AssociateFileSystem) onStorageGateway20130630AssociateFileSystem();
        else otherwise(Value);
    }
}
