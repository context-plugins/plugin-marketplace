using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget52>))]
public sealed record XAmzTarget52 : OpenStringEnum<XAmzTarget52>
{
    private XAmzTarget52(string value) : base(value)
    {
    }

    public static readonly XAmzTarget52 StorageGateway20130630UpdateChapCredentials = new(
        "StorageGateway_20130630.UpdateChapCredentials");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateChapCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateChapCredentials => onStorageGateway20130630UpdateChapCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateChapCredentials, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateChapCredentials) onStorageGateway20130630UpdateChapCredentials();
        else otherwise(Value);
    }
}
