using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11>))]
public sealed record XAmzTarget11 : OpenStringEnum<XAmzTarget11>
{
    private XAmzTarget11(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11 StorageGateway20130630AddTagsToResource = new(
        "StorageGateway_20130630.AddTagsToResource");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630AddTagsToResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630AddTagsToResource => onStorageGateway20130630AddTagsToResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630AddTagsToResource, Action<string> otherwise)
    {
        if (this == StorageGateway20130630AddTagsToResource) onStorageGateway20130630AddTagsToResource();
        else otherwise(Value);
    }
}
