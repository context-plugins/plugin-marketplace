using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget19>))]
public sealed record XAmzTarget19 : OpenStringEnum<XAmzTarget19>
{
    private XAmzTarget19(string value) : base(value)
    {
    }

    public static readonly XAmzTarget19 StorageGateway20130630DisassociateFileSystem = new(
        "StorageGateway_20130630.DisassociateFileSystem");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DisassociateFileSystem,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DisassociateFileSystem => onStorageGateway20130630DisassociateFileSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DisassociateFileSystem, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DisassociateFileSystem) onStorageGateway20130630DisassociateFileSystem();
        else otherwise(Value);
    }
}
