using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget39>))]
public sealed record XAmzTarget39 : OpenStringEnum<XAmzTarget39>
{
    private XAmzTarget39(string value) : base(value)
    {
    }

    public static readonly XAmzTarget39 StorageGateway20130630CreateTapes = new("StorageGateway_20130630.CreateTapes");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateTapes, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CreateTapes => onStorageGateway20130630CreateTapes(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateTapes, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateTapes) onStorageGateway20130630CreateTapes();
        else otherwise(Value);
    }
}
