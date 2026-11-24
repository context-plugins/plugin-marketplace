using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 StorageGateway20130630RetrieveTapeRecoveryPoint = new(
        "StorageGateway_20130630.RetrieveTapeRecoveryPoint");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630RetrieveTapeRecoveryPoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630RetrieveTapeRecoveryPoint => onStorageGateway20130630RetrieveTapeRecoveryPoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630RetrieveTapeRecoveryPoint, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630RetrieveTapeRecoveryPoint) onStorageGateway20130630RetrieveTapeRecoveryPoint();
        else otherwise(Value);
    }
}
