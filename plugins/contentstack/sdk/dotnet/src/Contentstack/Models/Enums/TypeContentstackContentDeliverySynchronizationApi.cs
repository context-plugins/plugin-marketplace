using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// The type of sync event. Possible values: entry_published, entry_unpublished, entry_deleted, asset_published, asset_unpublished, asset_deleted, content_type_deleted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeContentstackContentDeliverySynchronizationApi>))]
public sealed record TypeContentstackContentDeliverySynchronizationApi : OpenStringEnum<TypeContentstackContentDeliverySynchronizationApi>
{
    private TypeContentstackContentDeliverySynchronizationApi(string value) : base(value)
    {
    }

    public static readonly TypeContentstackContentDeliverySynchronizationApi EntryPublished = new("entry_published");

    public static readonly TypeContentstackContentDeliverySynchronizationApi EntryUnpublished = new(
        "entry_unpublished");

    public static readonly TypeContentstackContentDeliverySynchronizationApi EntryDeleted = new("entry_deleted");

    public static readonly TypeContentstackContentDeliverySynchronizationApi AssetPublished = new("asset_published");

    public static readonly TypeContentstackContentDeliverySynchronizationApi AssetUnpublished = new(
        "asset_unpublished");

    public static readonly TypeContentstackContentDeliverySynchronizationApi AssetDeleted = new("asset_deleted");

    public static readonly TypeContentstackContentDeliverySynchronizationApi ContentTypeDeleted = new(
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
