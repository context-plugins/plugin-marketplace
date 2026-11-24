using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget82>))]
public sealed record XAmzTarget82 : OpenStringEnum<XAmzTarget82>
{
    private XAmzTarget82(string value) : base(value)
    {
    }

    public static readonly XAmzTarget82 StorageGateway20130630UpdateSmbFileShareVisibility = new(
        "StorageGateway_20130630.UpdateSMBFileShareVisibility");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateSmbFileShareVisibility,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateSmbFileShareVisibility => onStorageGateway20130630UpdateSmbFileShareVisibility(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateSmbFileShareVisibility, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630UpdateSmbFileShareVisibility) onStorageGateway20130630UpdateSmbFileShareVisibility();
        else otherwise(Value);
    }
}
