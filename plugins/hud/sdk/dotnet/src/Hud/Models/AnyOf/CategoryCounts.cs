using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(CategoryCountsConverter))]
public record CategoryCounts
{
    private readonly Optional<ThumbnailCategoryCounts> _thumbnailCategoryCountsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CategoryCounts(Optional<ThumbnailCategoryCounts> thumbnailCategoryCountsValue,
        Optional<UnknownArm> unknownValue)
    {
        _thumbnailCategoryCountsValue = thumbnailCategoryCountsValue;
        _unknownValue = unknownValue;
    }

    public static CategoryCounts ThumbnailCategoryCounts(ThumbnailCategoryCounts value) =>
        new(Optional<ThumbnailCategoryCounts>.Some(value), default);

    internal static CategoryCounts Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetThumbnailCategoryCounts([NotNullWhen(true)] out ThumbnailCategoryCounts? value) =>
        _thumbnailCategoryCountsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CategoryCounts(ThumbnailCategoryCounts value) => ThumbnailCategoryCounts(value);

    public TResult Match<TResult>(Func<ThumbnailCategoryCounts, TResult> onThumbnailCategoryCounts,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetThumbnailCategoryCounts(out var thumbnailCategoryCountsValue) => onThumbnailCategoryCounts(
                thumbnailCategoryCountsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CategoryCounts)} holds no value.")
        };

    public void Match(Action<ThumbnailCategoryCounts> onThumbnailCategoryCounts, Action<JsonElement> otherwise)
    {
        if (TryGetThumbnailCategoryCounts(out var thumbnailCategoryCountsValue)) onThumbnailCategoryCounts(
            thumbnailCategoryCountsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CategoryCounts)} holds no value.");
    }
}

file sealed class CategoryCountsConverter : JsonConverter<CategoryCounts>
{
    public override CategoryCounts Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ThumbnailCategoryCounts>(root, options, out var thumbnailCategoryCountsValue))
        {
            return CategoryCounts.ThumbnailCategoryCounts(thumbnailCategoryCountsValue);
        }
        return CategoryCounts.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CategoryCounts value, JsonSerializerOptions options)
    {
        if (value.TryGetThumbnailCategoryCounts(out var thumbnailCategoryCountsValue))
        {
            JsonSerializer.Serialize(writer, thumbnailCategoryCountsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CategoryCounts)} contains no valid value to serialize.");
        }
    }
}
