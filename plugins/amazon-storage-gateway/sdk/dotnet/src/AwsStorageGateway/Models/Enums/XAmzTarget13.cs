using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13>))]
public sealed record XAmzTarget13 : OpenStringEnum<XAmzTarget13>
{
    private XAmzTarget13(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13 StorageGateway20130630RemoveTagsFromResource = new(
        "StorageGateway_20130630.RemoveTagsFromResource");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630RemoveTagsFromResource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630RemoveTagsFromResource => onStorageGateway20130630RemoveTagsFromResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630RemoveTagsFromResource, Action<string> otherwise)
    {
        if (this == StorageGateway20130630RemoveTagsFromResource) onStorageGateway20130630RemoveTagsFromResource();
        else otherwise(Value);
    }
}
