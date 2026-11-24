using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Beehiiv.Core.Extensions;
using Beehiiv.Core.Models;

namespace Beehiiv.Models.AnyOf;

/// <summary>
/// A list item as either plain text or formatted text data.
/// </summary>
[JsonConverter(typeof(ListBlockItemConverter))]
public record ListBlockItem
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<ListBlockItemData> _listBlockItemDataValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ListBlockItem(Optional<string> stringValue,
        Optional<ListBlockItemData> listBlockItemDataValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _listBlockItemDataValue = listBlockItemDataValue;
        _unknownValue = unknownValue;
    }

    public static ListBlockItem String(string value) => new(Optional<string>.Some(value), default, default);

    public static ListBlockItem ListBlockItemData(ListBlockItemData value) =>
        new(default, Optional<ListBlockItemData>.Some(value), default);

    internal static ListBlockItem Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetListBlockItemData([NotNullWhen(true)] out ListBlockItemData? value) =>
        _listBlockItemDataValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ListBlockItem(string value) => String(value);

    public static implicit operator ListBlockItem(ListBlockItemData value) => ListBlockItemData(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<ListBlockItemData, TResult> onListBlockItemData,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetListBlockItemData(out var listBlockItemDataValue) => onListBlockItemData(
                listBlockItemDataValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ListBlockItem)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<ListBlockItemData> onListBlockItemData,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetListBlockItemData(out var listBlockItemDataValue)) onListBlockItemData(listBlockItemDataValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ListBlockItem)} holds no value.");
    }
}

file sealed class ListBlockItemConverter : JsonConverter<ListBlockItem>
{
    public override ListBlockItem Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return ListBlockItem.String(value);
        }
        if (JsonSerializer.TryDeserialize<ListBlockItemData>(root, options, out var listBlockItemDataValue))
        {
            return ListBlockItem.ListBlockItemData(listBlockItemDataValue);
        }
        return ListBlockItem.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ListBlockItem value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetListBlockItemData(out var listBlockItemDataValue))
        {
            JsonSerializer.Serialize(writer, listBlockItemDataValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ListBlockItem)} contains no valid value to serialize.");
        }
    }
}
