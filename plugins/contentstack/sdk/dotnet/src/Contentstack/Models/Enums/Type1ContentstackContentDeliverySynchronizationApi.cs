using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1ContentstackContentDeliverySynchronizationApi>))]
public sealed record Type1ContentstackContentDeliverySynchronizationApi : OpenStringEnum<Type1ContentstackContentDeliverySynchronizationApi>
{
    private Type1ContentstackContentDeliverySynchronizationApi(string value) : base(value)
    {
    }

    public static readonly Type1ContentstackContentDeliverySynchronizationApi EntryPublished = new("entry_published");

    public static readonly Type1ContentstackContentDeliverySynchronizationApi EntryUnpublished = new(
        "entry_unpublished");

    public static readonly Type1ContentstackContentDeliverySynchronizationApi EntryDeleted = new("entry_deleted");

    public static readonly Type1ContentstackContentDeliverySynchronizationApi AssetPublished = new("asset_published");

    public static readonly Type1ContentstackContentDeliverySynchronizationApi AssetUnpublished = new(
        "asset_unpublished");

    public static readonly Type1ContentstackContentDeliverySynchronizationApi AssetDeleted = new("asset_deleted");

    public static readonly Type1ContentstackContentDeliverySynchronizationApi ContentTypeDeleted = new(
        "content_type_deleted");

    public TResult Match<TResult>(Func<TResult> onEntryPublished,
        Func<TResult> onEntryUnpublished,
        Func<TResult> onEntryDeleted,
        Func<TResult> onAssetPublished,
        Func<TResult> onAssetUnpublished,
        Func<TResult> onAssetDeleted,
        Func<TResult> onContentTypeDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EntryPublished => onEntryPublished(),
            _ when this == EntryUnpublished => onEntryUnpublished(),
            _ when this == EntryDeleted => onEntryDeleted(),
            _ when this == AssetPublished => onAssetPublished(),
            _ when this == AssetUnpublished => onAssetUnpublished(),
            _ when this == AssetDeleted => onAssetDeleted(),
            _ when this == ContentTypeDeleted => onContentTypeDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onEntryPublished,
        Action onEntryUnpublished,
        Action onEntryDeleted,
        Action onAssetPublished,
        Action onAssetUnpublished,
        Action onAssetDeleted,
        Action onContentTypeDeleted,
        Action<string> otherwise)
    {
        if (this == EntryPublished) onEntryPublished();
        else if (this == EntryUnpublished) onEntryUnpublished();
        else if (this == EntryDeleted) onEntryDeleted();
        else if (this == AssetPublished) onAssetPublished();
        else if (this == AssetUnpublished) onAssetUnpublished();
        else if (this == AssetDeleted) onAssetDeleted();
        else if (this == ContentTypeDeleted) onContentTypeDeleted();
        else otherwise(Value);
    }
}
