using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget45>))]
public sealed record XAmzTarget45 : OpenStringEnum<XAmzTarget45>
{
    private XAmzTarget45(string value) : base(value)
    {
    }

    public static readonly XAmzTarget45 StorageGateway20130630ListAutomaticTapeCreationPolicies = new(
        "StorageGateway_20130630.ListAutomaticTapeCreationPolicies");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListAutomaticTapeCreationPolicies,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630ListAutomaticTapeCreationPolicies => onStorageGateway20130630ListAutomaticTapeCreationPolicies(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListAutomaticTapeCreationPolicies, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630ListAutomaticTapeCreationPolicies) onStorageGateway20130630ListAutomaticTapeCreationPolicies();
        else otherwise(Value);
    }
}
