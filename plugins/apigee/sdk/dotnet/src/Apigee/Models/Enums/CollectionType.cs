using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The type of collection. Applies to all entries in api_data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CollectionType>))]
public sealed record CollectionType : OpenStringEnum<CollectionType>
{
    private CollectionType(string value) : base(value)
    {
    }

    public static readonly CollectionType CollectionTypeUnspecified = new("COLLECTION_TYPE_UNSPECIFIED");

    public static readonly CollectionType CollectionTypeUpsert = new("COLLECTION_TYPE_UPSERT");

    public static readonly CollectionType CollectionTypeDelete = new("COLLECTION_TYPE_DELETE");

    public TResult Match<TResult>(Func<TResult> onCollectionTypeUnspecified,
        Func<TResult> onCollectionTypeUpsert,
        Func<TResult> onCollectionTypeDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CollectionTypeUnspecified => onCollectionTypeUnspecified(),
            _ when this == CollectionTypeUpsert => onCollectionTypeUpsert(),
            _ when this == CollectionTypeDelete => onCollectionTypeDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onCollectionTypeUnspecified,
        Action onCollectionTypeUpsert,
        Action onCollectionTypeDelete,
        Action<string> otherwise)
    {
        if (this == CollectionTypeUnspecified) onCollectionTypeUnspecified();
        else if (this == CollectionTypeUpsert) onCollectionTypeUpsert();
        else if (this == CollectionTypeDelete) onCollectionTypeDelete();
        else otherwise(Value);
    }
}
