using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CodeQr.Core.Extensions;
using CodeQr.Core.Models;

namespace CodeQr.Models.AnyOf;

/// <summary>
/// The unique name of the tags assigned to the short link (case insensitive)., The unique name of the tags assigned to the QR code (case insensitive).
/// </summary>
[JsonConverter(typeof(TagNamesConverter))]
public record TagNames
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TagNames(Optional<string> stringValue,
        Optional<IReadOnlyList<string>> listOfStringValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _listOfStringValue = listOfStringValue;
        _unknownValue = unknownValue;
    }

    public static TagNames String(string value) => new(Optional<string>.Some(value), default, default);

    public static TagNames ListOfString(IReadOnlyList<string> value) =>
        new(default, Optional<IReadOnlyList<string>>.Some(value), default);

    internal static TagNames Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TagNames(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<IReadOnlyList<string>, TResult> onListOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetListOfString(out var listOfStringValue) => onListOfString(listOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TagNames)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<IReadOnlyList<string>> onListOfString,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetListOfString(out var listOfStringValue)) onListOfString(listOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TagNames)} holds no value.");
    }
}

file sealed class TagNamesConverter : JsonConverter<TagNames>
{
    public override TagNames Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return TagNames.String(value);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return TagNames.ListOfString(listOfStringValue);
        }
        return TagNames.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TagNames value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetListOfString(out var listOfStringValue))
        {
            JsonSerializer.Serialize(writer, listOfStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TagNames)} contains no valid value to serialize.");
        }
    }
}
