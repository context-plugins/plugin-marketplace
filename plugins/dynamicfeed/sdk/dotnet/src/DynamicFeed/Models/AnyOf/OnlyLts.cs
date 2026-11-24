using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using DynamicFeed.Core.Extensions;
using DynamicFeed.Core.Models;

namespace DynamicFeed.Models.AnyOf;

/// <summary>
/// only long-term-support lines
/// </summary>
[JsonConverter(typeof(OnlyLtsConverter))]
public record OnlyLts
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OnlyLts(Optional<bool> boolValue, Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static OnlyLts Bool(bool value) => new(Optional<bool>.Some(value), default);

    internal static OnlyLts Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OnlyLts(bool value) => Bool(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OnlyLts)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OnlyLts)} holds no value.");
    }
}

file sealed class OnlyLtsConverter : JsonConverter<OnlyLts>
{
    public override OnlyLts Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return OnlyLts.Bool(boolValue);
        }
        return OnlyLts.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OnlyLts value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(OnlyLts)} contains no valid value to serialize.");
        }
    }
}
