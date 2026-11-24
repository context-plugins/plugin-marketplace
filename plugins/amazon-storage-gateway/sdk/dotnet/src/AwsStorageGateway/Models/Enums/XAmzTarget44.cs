using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget44>))]
public sealed record XAmzTarget44 : OpenStringEnum<XAmzTarget44>
{
    private XAmzTarget44(string value) : base(value)
    {
    }

    public static readonly XAmzTarget44 StorageGateway20130630DeleteAutomaticTapeCreationPolicy = new(
        "StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteAutomaticTapeCreationPolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DeleteAutomaticTapeCreationPolicy => onStorageGateway20130630DeleteAutomaticTapeCreationPolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteAutomaticTapeCreationPolicy, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DeleteAutomaticTapeCreationPolicy) onStorageGateway20130630DeleteAutomaticTapeCreationPolicy();
        else otherwise(Value);
    }
}
