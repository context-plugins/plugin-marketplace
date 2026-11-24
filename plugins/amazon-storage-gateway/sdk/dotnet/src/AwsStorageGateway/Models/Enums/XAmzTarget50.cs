using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget50>))]
public sealed record XAmzTarget50 : OpenStringEnum<XAmzTarget50>
{
    private XAmzTarget50(string value) : base(value)
    {
    }

    public static readonly XAmzTarget50 StorageGateway20130630DeleteChapCredentials = new(
        "StorageGateway_20130630.DeleteChapCredentials");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteChapCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DeleteChapCredentials => onStorageGateway20130630DeleteChapCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteChapCredentials, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteChapCredentials) onStorageGateway20130630DeleteChapCredentials();
        else otherwise(Value);
    }
}
