using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget42>))]
public sealed record XAmzTarget42 : OpenStringEnum<XAmzTarget42>
{
    private XAmzTarget42(string value) : base(value)
    {
    }

    public static readonly XAmzTarget42 StorageGateway20130630DescribeTapes = new(
        "StorageGateway_20130630.DescribeTapes");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeTapes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DescribeTapes => onStorageGateway20130630DescribeTapes(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeTapes, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeTapes) onStorageGateway20130630DescribeTapes();
        else otherwise(Value);
    }
}
