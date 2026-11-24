using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AgentReady.Core.Extensions;
using AgentReady.Core.Models;

namespace AgentReady.Models.AnyOf;

[JsonConverter(typeof(StreamingConverter))]
public record Streaming
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Streaming(Optional<bool> boolValue, Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Streaming Bool(bool value) => new(Optional<bool>.Some(value), default, default);

    public static Streaming String(string value) => new(default, Optional<string>.Some(value), default);

    internal static Streaming Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Streaming(bool value) => Bool(value);

    public static implicit operator Streaming(string value) => String(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Streaming)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Streaming)} holds no value.");
    }
}

file sealed class StreamingConverter : JsonConverter<Streaming>
{
    public override Streaming Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Streaming.Bool(boolValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Streaming.String(value);
        }
        return Streaming.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Streaming value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Streaming)} contains no valid value to serialize.");
        }
    }
}
