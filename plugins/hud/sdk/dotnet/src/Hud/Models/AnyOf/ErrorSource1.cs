using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ErrorSource1Converter))]
public record ErrorSource1
{
    private readonly Optional<ErrorSource> _errorSourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ErrorSource1(Optional<ErrorSource> errorSourceValue, Optional<UnknownArm> unknownValue)
    {
        _errorSourceValue = errorSourceValue;
        _unknownValue = unknownValue;
    }

    public static ErrorSource1 ErrorSource(ErrorSource value) => new(Optional<ErrorSource>.Some(value), default);

    internal static ErrorSource1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetErrorSource([NotNullWhen(true)] out ErrorSource? value) =>
        _errorSourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ErrorSource1(ErrorSource value) => ErrorSource(value);

    public TResult Match<TResult>(Func<ErrorSource, TResult> onErrorSource, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorSource(out var errorSourceValue) => onErrorSource(errorSourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ErrorSource1)} holds no value.")
        };

    public void Match(Action<ErrorSource> onErrorSource, Action<JsonElement> otherwise)
    {
        if (TryGetErrorSource(out var errorSourceValue)) onErrorSource(errorSourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ErrorSource1)} holds no value.");
    }
}

file sealed class ErrorSource1Converter : JsonConverter<ErrorSource1>
{
    public override ErrorSource1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ErrorSource>(root, options, out var errorSourceValue))
        {
            return ErrorSource1.ErrorSource(errorSourceValue);
        }
        return ErrorSource1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ErrorSource1 value, JsonSerializerOptions options)
    {
        if (value.TryGetErrorSource(out var errorSourceValue))
        {
            JsonSerializer.Serialize(writer, errorSourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ErrorSource1)} contains no valid value to serialize.");
        }
    }
}
