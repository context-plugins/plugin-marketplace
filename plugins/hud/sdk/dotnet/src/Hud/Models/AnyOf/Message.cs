using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(MessageConverter))]
public record Message
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<IReadOnlyList<AtifContentPart>> _listOfAtifContentPartValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Message(Optional<string> stringValue,
        Optional<IReadOnlyList<AtifContentPart>> listOfAtifContentPartValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _listOfAtifContentPartValue = listOfAtifContentPartValue;
        _unknownValue = unknownValue;
    }

    public static Message String(string value) => new(Optional<string>.Some(value), default, default);

    public static Message ListOfAtifContentPart(IReadOnlyList<AtifContentPart> value) =>
        new(default, Optional<IReadOnlyList<AtifContentPart>>.Some(value), default);

    internal static Message Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetListOfAtifContentPart([NotNullWhen(true)] out IReadOnlyList<AtifContentPart>? value) =>
        _listOfAtifContentPartValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Message(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<IReadOnlyList<AtifContentPart>, TResult> onListOfAtifContentPart,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetListOfAtifContentPart(out var listOfAtifContentPartValue) => onListOfAtifContentPart(
                listOfAtifContentPartValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Message)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<IReadOnlyList<AtifContentPart>> onListOfAtifContentPart,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetListOfAtifContentPart(out var listOfAtifContentPartValue)) onListOfAtifContentPart(
            listOfAtifContentPartValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Message)} holds no value.");
    }
}

file sealed class MessageConverter : JsonConverter<Message>
{
    public override Message Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Message.String(value);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<AtifContentPart>>(
            root,
            options,
            out var listOfAtifContentPartValue))
        {
            return Message.ListOfAtifContentPart(listOfAtifContentPartValue);
        }
        return Message.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Message value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetListOfAtifContentPart(out var listOfAtifContentPartValue))
        {
            JsonSerializer.Serialize(writer, listOfAtifContentPartValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Message)} contains no valid value to serialize.");
        }
    }
}
