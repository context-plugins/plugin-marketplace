using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget23>))]
public sealed record XAmzTarget23 : OpenStringEnum<XAmzTarget23>
{
    private XAmzTarget23(string value) : base(value)
    {
    }

    public static readonly XAmzTarget23 StorageGateway20130630CancelArchival = new(
        "StorageGateway_20130630.CancelArchival");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CancelArchival,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CancelArchival => onStorageGateway20130630CancelArchival(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CancelArchival, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CancelArchival) onStorageGateway20130630CancelArchival();
        else otherwise(Value);
    }
}
