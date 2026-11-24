using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ObservationConverter))]
public record Observation
{
    private readonly Optional<AtifObservation> _atifObservationValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Observation(Optional<AtifObservation> atifObservationValue, Optional<UnknownArm> unknownValue)
    {
        _atifObservationValue = atifObservationValue;
        _unknownValue = unknownValue;
    }

    public static Observation AtifObservation(AtifObservation value) =>
        new(Optional<AtifObservation>.Some(value), default);

    internal static Observation Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAtifObservation([NotNullWhen(true)] out AtifObservation? value) =>
        _atifObservationValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Observation(AtifObservation value) => AtifObservation(value);

    public TResult Match<TResult>(Func<AtifObservation, TResult> onAtifObservation,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAtifObservation(out var atifObservationValue) => onAtifObservation(atifObservationValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Observation)} holds no value.")
        };

    public void Match(Action<AtifObservation> onAtifObservation, Action<JsonElement> otherwise)
    {
        if (TryGetAtifObservation(out var atifObservationValue)) onAtifObservation(atifObservationValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Observation)} holds no value.");
    }
}

file sealed class ObservationConverter : JsonConverter<Observation>
{
    public override Observation Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AtifObservation>(root, options, out var atifObservationValue))
        {
            return Observation.AtifObservation(atifObservationValue);
        }
        return Observation.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Observation value, JsonSerializerOptions options)
    {
        if (value.TryGetAtifObservation(out var atifObservationValue))
        {
            JsonSerializer.Serialize(writer, atifObservationValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Observation)} contains no valid value to serialize.");
        }
    }
}
