using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

/// <summary>
/// Up to 5 addresses for digest delivery.
/// </summary>
[JsonConverter(typeof(EmailTo1Converter))]
public record EmailTo1
{
    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EmailTo1(Optional<IReadOnlyList<string>> listOfStringValue, Optional<UnknownArm> unknownValue)
    {
        _listOfStringValue = listOfStringValue;
        _unknownValue = unknownValue;
    }

    public static EmailTo1 ListOfString(IReadOnlyList<string> value) =>
        new(Optional<IReadOnlyList<string>>.Some(value), default);

    internal static EmailTo1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<string>, TResult> onListOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfString(out var listOfStringValue) => onListOfString(listOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EmailTo1)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<string>> onListOfString, Action<JsonElement> otherwise)
    {
        if (TryGetListOfString(out var listOfStringValue)) onListOfString(listOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EmailTo1)} holds no value.");
    }
}

file sealed class EmailTo1Converter : JsonConverter<EmailTo1>
{
    public override EmailTo1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return EmailTo1.ListOfString(listOfStringValue);
        }
        return EmailTo1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EmailTo1 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfString(out var listOfStringValue))
        {
            JsonSerializer.Serialize(writer, listOfStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EmailTo1)} contains no valid value to serialize.");
        }
    }
}
