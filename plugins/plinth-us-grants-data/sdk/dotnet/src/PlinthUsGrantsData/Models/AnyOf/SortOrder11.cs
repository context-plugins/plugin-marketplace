using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(SortOrder11Converter))]
public record SortOrder11
{
    private readonly Optional<SortOrder> _sortOrderValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SortOrder11(Optional<SortOrder> sortOrderValue, Optional<UnknownArm> unknownValue)
    {
        _sortOrderValue = sortOrderValue;
        _unknownValue = unknownValue;
    }

    public static SortOrder11 SortOrder(SortOrder value) => new(Optional<SortOrder>.Some(value), default);

    internal static SortOrder11 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSortOrder([NotNullWhen(true)] out SortOrder? value) => _sortOrderValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SortOrder11(SortOrder value) => SortOrder(value);

    public TResult Match<TResult>(Func<SortOrder, TResult> onSortOrder, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSortOrder(out var sortOrderValue) => onSortOrder(sortOrderValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SortOrder11)} holds no value.")
        };

    public void Match(Action<SortOrder> onSortOrder, Action<JsonElement> otherwise)
    {
        if (TryGetSortOrder(out var sortOrderValue)) onSortOrder(sortOrderValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SortOrder11)} holds no value.");
    }
}

file sealed class SortOrder11Converter : JsonConverter<SortOrder11>
{
    public override SortOrder11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SortOrder>(root, options, out var sortOrderValue))
        {
            return SortOrder11.SortOrder(sortOrderValue);
        }
        return SortOrder11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SortOrder11 value, JsonSerializerOptions options)
    {
        if (value.TryGetSortOrder(out var sortOrderValue))
        {
            JsonSerializer.Serialize(writer, sortOrderValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SortOrder11)} contains no valid value to serialize.");
        }
    }
}
