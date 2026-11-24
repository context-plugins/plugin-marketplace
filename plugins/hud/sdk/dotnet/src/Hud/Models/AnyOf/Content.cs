using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ContentConverter))]
public record Content
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<IReadOnlyList<object>> _listOfAnonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Content(Optional<string> stringValue,
        Optional<IReadOnlyList<object>> listOfAnonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _listOfAnonymousObjectValue = listOfAnonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static Content String(string value) => new(Optional<string>.Some(value), default, default);

    public static Content ListOfAnonymousObject(IReadOnlyList<object> value) =>
        new(default, Optional<IReadOnlyList<object>>.Some(value), default);

    internal static Content Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetListOfAnonymousObject([NotNullWhen(true)] out IReadOnlyList<object>? value) =>
        _listOfAnonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Content(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<IReadOnlyList<object>, TResult> onListOfAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetListOfAnonymousObject(out var listOfAnonymousObjectValue) => onListOfAnonymousObject(
                listOfAnonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Content)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<IReadOnlyList<object>> onListOfAnonymousObject,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetListOfAnonymousObject(out var listOfAnonymousObjectValue)) onListOfAnonymousObject(
            listOfAnonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Content)} holds no value.");
    }
}

file sealed class ContentConverter : JsonConverter<Content>
{
    public override Content Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Content.String(value);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<object>>(root, options, out var listOfAnonymousObjectValue))
        {
            return Content.ListOfAnonymousObject(listOfAnonymousObjectValue);
        }
        return Content.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Content value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetListOfAnonymousObject(out var listOfAnonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, listOfAnonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Content)} contains no valid value to serialize.");
        }
    }
}
