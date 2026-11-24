using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget24>))]
public sealed record XAmzTarget24 : OpenStringEnum<XAmzTarget24>
{
    private XAmzTarget24(string value) : base(value)
    {
    }

    public static readonly XAmzTarget24 StorageGateway20130630CancelRetrieval = new(
        "StorageGateway_20130630.CancelRetrieval");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CancelRetrieval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CancelRetrieval => onStorageGateway20130630CancelRetrieval(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CancelRetrieval, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CancelRetrieval) onStorageGateway20130630CancelRetrieval();
        else otherwise(Value);
    }
}
