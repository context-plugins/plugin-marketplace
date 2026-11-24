using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget43>))]
public sealed record XAmzTarget43 : OpenStringEnum<XAmzTarget43>
{
    private XAmzTarget43(string value) : base(value)
    {
    }

    public static readonly XAmzTarget43 StorageGateway20130630ListTapes = new("StorageGateway_20130630.ListTapes");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListTapes, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListTapes => onStorageGateway20130630ListTapes(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListTapes, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListTapes) onStorageGateway20130630ListTapes();
        else otherwise(Value);
    }
}
