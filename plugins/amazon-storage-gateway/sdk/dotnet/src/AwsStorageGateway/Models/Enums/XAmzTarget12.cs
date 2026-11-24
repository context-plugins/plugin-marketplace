using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12>))]
public sealed record XAmzTarget12 : OpenStringEnum<XAmzTarget12>
{
    private XAmzTarget12(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12 StorageGateway20130630ListTagsForResource = new(
        "StorageGateway_20130630.ListTagsForResource");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListTagsForResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListTagsForResource => onStorageGateway20130630ListTagsForResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListTagsForResource, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListTagsForResource) onStorageGateway20130630ListTagsForResource();
        else otherwise(Value);
    }
}
