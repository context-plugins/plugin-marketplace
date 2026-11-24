using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Verbosity1Converter))]
public record Verbosity1
{
    private readonly Optional<Verbosity> _verbosityValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Verbosity1(Optional<Verbosity> verbosityValue, Optional<UnknownArm> unknownValue)
    {
        _verbosityValue = verbosityValue;
        _unknownValue = unknownValue;
    }

    public static Verbosity1 Verbosity(Verbosity value) => new(Optional<Verbosity>.Some(value), default);

    internal static Verbosity1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetVerbosity([NotNullWhen(true)] out Verbosity? value) => _verbosityValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Verbosity1(Verbosity value) => Verbosity(value);

    public TResult Match<TResult>(Func<Verbosity, TResult> onVerbosity, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetVerbosity(out var verbosityValue) => onVerbosity(verbosityValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Verbosity1)} holds no value.")
        };

    public void Match(Action<Verbosity> onVerbosity, Action<JsonElement> otherwise)
    {
        if (TryGetVerbosity(out var verbosityValue)) onVerbosity(verbosityValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Verbosity1)} holds no value.");
    }
}

file sealed class Verbosity1Converter : JsonConverter<Verbosity1>
{
    public override Verbosity1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Verbosity>(root, options, out var verbosityValue))
        {
            return Verbosity1.Verbosity(verbosityValue);
        }
        return Verbosity1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Verbosity1 value, JsonSerializerOptions options)
    {
        if (value.TryGetVerbosity(out var verbosityValue))
        {
            JsonSerializer.Serialize(writer, verbosityValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Verbosity1)} contains no valid value to serialize.");
        }
    }
}
