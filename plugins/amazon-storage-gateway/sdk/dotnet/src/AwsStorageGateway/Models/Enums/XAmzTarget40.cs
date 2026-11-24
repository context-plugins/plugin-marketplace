using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget40>))]
public sealed record XAmzTarget40 : OpenStringEnum<XAmzTarget40>
{
    private XAmzTarget40(string value) : base(value)
    {
    }

    public static readonly XAmzTarget40 StorageGateway20130630CreateTapeWithBarcode = new(
        "StorageGateway_20130630.CreateTapeWithBarcode");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateTapeWithBarcode,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630CreateTapeWithBarcode => onStorageGateway20130630CreateTapeWithBarcode(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateTapeWithBarcode, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateTapeWithBarcode) onStorageGateway20130630CreateTapeWithBarcode();
        else otherwise(Value);
    }
}
