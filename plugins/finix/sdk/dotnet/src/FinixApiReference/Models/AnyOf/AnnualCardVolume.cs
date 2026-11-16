using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

/// <summary>
/// The annual credit card sales (in cents) expected to be processed (max 19 characters).
/// </summary>
[JsonConverter(typeof(AnnualCardVolumeConverter))]
public record AnnualCardVolume
{
    private readonly Optional<int> _intValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AnnualCardVolume(Optional<int> intValue, Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static AnnualCardVolume Int(int value) => new(Optional<int>.Some(value), default, default);

    public static AnnualCardVolume String(string value) => new(default, Optional<string>.Some(value), default);

    internal static AnnualCardVolume Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AnnualCardVolume(int value) => Int(value);

    public static implicit operator AnnualCardVolume(string value) => String(value);

    public TResult Match<TResult>(Func<int, TResult> onInt,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AnnualCardVolume)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AnnualCardVolume)} holds no value.");
    }
}

file sealed class AnnualCardVolumeConverter : JsonConverter<AnnualCardVolume>
{
    public override AnnualCardVolume Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue))
            {
                return AnnualCardVolume.Int(intValue);
            }
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return AnnualCardVolume.String(value);
        }
        return AnnualCardVolume.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AnnualCardVolume value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
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
            throw new JsonException($"{nameof(AnnualCardVolume)} contains no valid value to serialize.");
        }
    }
}
