using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

/// <summary>
/// Raw response from the processor. For <c>SELLER</c> Merchants, please use the newer <c>outcomes</c> and <c>outcome_summary</c> fields.
/// </summary>
[JsonConverter(typeof(Raw11Converter))]
public record Raw11
{
    private readonly Optional<IReadOnlyList<Raw>?> _listOfRawValue;

    private readonly Optional<object?> _anonymousObjectValue;

    private readonly Optional<string?> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Raw11(Optional<IReadOnlyList<Raw>?> listOfRawValue,
        Optional<object?> anonymousObjectValue,
        Optional<string?> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfRawValue = listOfRawValue;
        _anonymousObjectValue = anonymousObjectValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Raw11 ListOfRaw(IReadOnlyList<Raw>? value) =>
        new(Optional<IReadOnlyList<Raw>?>.Some(value), default, default, default);

    public static Raw11 AnonymousObject(object? value) => new(default, Optional<object?>.Some(value), default, default);

    public static Raw11 String(string? value) => new(default, default, Optional<string?>.Some(value), default);

    internal static Raw11 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfRaw(out IReadOnlyList<Raw>? value) => _listOfRawValue.TryGetValue(out value);

    public bool TryGetAnonymousObject(out object? value) => _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetString(out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Raw11(string? value) => String(value);

    public TResult Match<TResult>(Func<IReadOnlyList<Raw>?, TResult> onListOfRaw,
        Func<object?, TResult> onAnonymousObject,
        Func<string?, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfRaw(out var listOfRawValue) => onListOfRaw(listOfRawValue),
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Raw11)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Raw>?> onListOfRaw,
        Action<object?> onAnonymousObject,
        Action<string?> onString,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfRaw(out var listOfRawValue)) onListOfRaw(listOfRawValue);
        else if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Raw11)} holds no value.");
    }
}

file sealed class Raw11Converter : JsonConverter<Raw11>
{
    public override Raw11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Raw>?>(root, options, out var listOfRawValue))
        {
            return Raw11.ListOfRaw(listOfRawValue);
        }
        if (JsonSerializer.TryDeserialize<object?>(root, options, out var anonymousObjectValue))
        {
            return Raw11.AnonymousObject(anonymousObjectValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Raw11.String(value);
        }
        return Raw11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Raw11 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfRaw(out var listOfRawValue))
        {
            JsonSerializer.Serialize(writer, listOfRawValue, options);
        }
        else if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Raw11)} contains no valid value to serialize.");
        }
    }
}
