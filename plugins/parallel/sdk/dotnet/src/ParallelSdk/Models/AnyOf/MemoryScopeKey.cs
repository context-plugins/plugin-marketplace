using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Core.Validation;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
/// </summary>
[JsonConverter(typeof(MemoryScopeKeyConverter))]
public record MemoryScopeKey
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MemoryScopeKey(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static MemoryScopeKey String(string value) => new(Optional<string>.Some(value), default);

    internal static MemoryScopeKey Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MemoryScopeKey(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MemoryScopeKey)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MemoryScopeKey)} holds no value.");
    }
}

file sealed class MemoryScopeKeyConverter : JsonConverter<MemoryScopeKey>
{
    public override MemoryScopeKey Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMinLength(1) && value.HasMaxLength(128) && value.MatchesPattern("^[a-zA-Z0-9_-]+$"))
            {
                return MemoryScopeKey.String(value);
            }
        }
        return MemoryScopeKey.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, MemoryScopeKey value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(MemoryScopeKey)} contains no valid value to serialize.");
        }
    }
}
