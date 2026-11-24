using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget46>))]
public sealed record XAmzTarget46 : OpenStringEnum<XAmzTarget46>
{
    private XAmzTarget46(string value) : base(value)
    {
    }

    public static readonly XAmzTarget46 StorageGateway20130630UpdateAutomaticTapeCreationPolicy = new(
        "StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateAutomaticTapeCreationPolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateAutomaticTapeCreationPolicy => onStorageGateway20130630UpdateAutomaticTapeCreationPolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateAutomaticTapeCreationPolicy, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630UpdateAutomaticTapeCreationPolicy) onStorageGateway20130630UpdateAutomaticTapeCreationPolicy();
        else otherwise(Value);
    }
}
