using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using DynamicFeed.Core.Extensions;
using DynamicFeed.Core.Models;

namespace DynamicFeed.Models.AnyOf;

/// <summary>
/// exclude end-of-life release lines
/// </summary>
[JsonConverter(typeof(OnlySupportedConverter))]
public record OnlySupported
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OnlySupported(Optional<bool> boolValue, Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static OnlySupported Bool(bool value) => new(Optional<bool>.Some(value), default);

    internal static OnlySupported Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OnlySupported(bool value) => Bool(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OnlySupported)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OnlySupported)} holds no value.");
    }
}

file sealed class OnlySupportedConverter : JsonConverter<OnlySupported>
{
    public override OnlySupported Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return OnlySupported.Bool(boolValue);
        }
        return OnlySupported.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OnlySupported value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(OnlySupported)} contains no valid value to serialize.");
        }
    }
}
