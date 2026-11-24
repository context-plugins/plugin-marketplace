using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Jid.Core.Extensions;
using Jid.Core.Models;

namespace Jid.Models.AnyOf;

/// <summary>
/// true, false or "unknown"
/// </summary>
[JsonConverter(typeof(ConsistentConverter))]
public record Consistent
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Consistent(Optional<bool> boolValue, Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Consistent Bool(bool value) => new(Optional<bool>.Some(value), default, default);

    public static Consistent String(string value) => new(default, Optional<string>.Some(value), default);

    internal static Consistent Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Consistent(bool value) => Bool(value);

    public static implicit operator Consistent(string value) => String(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Consistent)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Consistent)} holds no value.");
    }
}

file sealed class ConsistentConverter : JsonConverter<Consistent>
{
    public override Consistent Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Consistent.Bool(boolValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Consistent.String(value);
        }
        return Consistent.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Consistent value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
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
            throw new JsonException($"{nameof(Consistent)} contains no valid value to serialize.");
        }
    }
}
