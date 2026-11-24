using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(LogprobsConverter))]
public record Logprobs
{
    private readonly Optional<IReadOnlyList<double>> _listOfDoubleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Logprobs(Optional<IReadOnlyList<double>> listOfDoubleValue, Optional<UnknownArm> unknownValue)
    {
        _listOfDoubleValue = listOfDoubleValue;
        _unknownValue = unknownValue;
    }

    public static Logprobs ListOfDouble(IReadOnlyList<double> value) =>
        new(Optional<IReadOnlyList<double>>.Some(value), default);

    internal static Logprobs Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfDouble([NotNullWhen(true)] out IReadOnlyList<double>? value) =>
        _listOfDoubleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<double>, TResult> onListOfDouble,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfDouble(out var listOfDoubleValue) => onListOfDouble(listOfDoubleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Logprobs)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<double>> onListOfDouble, Action<JsonElement> otherwise)
    {
        if (TryGetListOfDouble(out var listOfDoubleValue)) onListOfDouble(listOfDoubleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Logprobs)} holds no value.");
    }
}

file sealed class LogprobsConverter : JsonConverter<Logprobs>
{
    public override Logprobs Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<double>>(root, options, out var listOfDoubleValue))
        {
            return Logprobs.ListOfDouble(listOfDoubleValue);
        }
        return Logprobs.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Logprobs value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfDouble(out var listOfDoubleValue))
        {
            JsonSerializer.Serialize(writer, listOfDoubleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Logprobs)} contains no valid value to serialize.");
        }
    }
}
