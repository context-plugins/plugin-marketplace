using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Search mode preset: supported values are <c>turbo</c>, <c>fast</c>, <c>basic</c>, and <c>advanced</c>. Turbo mode is optimized for the fastest responses. Use Fast mode for high quality search within a 1-second latency budget. Basic mode offers low latency and works best with 2-3 high-quality search_queries. Advanced mode provides higher quality with more advanced retrieval and compression. Defaults to <c>advanced</c> when omitted.
/// </summary>
[JsonConverter(typeof(Mode1Converter))]
public record Mode1
{
    private readonly Optional<Mode> _modeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Mode1(Optional<Mode> modeValue, Optional<UnknownArm> unknownValue)
    {
        _modeValue = modeValue;
        _unknownValue = unknownValue;
    }

    public static Mode1 Mode(Mode value) => new(Optional<Mode>.Some(value), default);

    internal static Mode1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMode([NotNullWhen(true)] out Mode? value) => _modeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Mode1(Mode value) => Mode(value);

    public TResult Match<TResult>(Func<Mode, TResult> onMode, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMode(out var modeValue) => onMode(modeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Mode1)} holds no value.")
        };

    public void Match(Action<Mode> onMode, Action<JsonElement> otherwise)
    {
        if (TryGetMode(out var modeValue)) onMode(modeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Mode1)} holds no value.");
    }
}

file sealed class Mode1Converter : JsonConverter<Mode1>
{
    public override Mode1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Mode>(root, options, out var modeValue))
        {
            return Mode1.Mode(modeValue);
        }
        return Mode1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Mode1 value, JsonSerializerOptions options)
    {
        if (value.TryGetMode(out var modeValue))
        {
            JsonSerializer.Serialize(writer, modeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Mode1)} contains no valid value to serialize.");
        }
    }
}
