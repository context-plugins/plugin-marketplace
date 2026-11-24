using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DevCycle.Core.Extensions;
using DevCycle.Core.Models;

namespace DevCycle.Models.AnyOf;

[JsonConverter(typeof(FlagConverter))]
public record Flag
{
    private readonly Optional<OfrepEvaluationSuccess> _ofrepEvaluationSuccessValue;

    private readonly Optional<OfrepEvaluationFailure> _ofrepEvaluationFailureValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Flag(Optional<OfrepEvaluationSuccess> ofrepEvaluationSuccessValue,
        Optional<OfrepEvaluationFailure> ofrepEvaluationFailureValue,
        Optional<UnknownArm> unknownValue)
    {
        _ofrepEvaluationSuccessValue = ofrepEvaluationSuccessValue;
        _ofrepEvaluationFailureValue = ofrepEvaluationFailureValue;
        _unknownValue = unknownValue;
    }

    public static Flag OfrepEvaluationSuccess(OfrepEvaluationSuccess value) =>
        new(Optional<OfrepEvaluationSuccess>.Some(value), default, default);

    public static Flag OfrepEvaluationFailure(OfrepEvaluationFailure value) =>
        new(default, Optional<OfrepEvaluationFailure>.Some(value), default);

    internal static Flag Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetOfrepEvaluationSuccess([NotNullWhen(true)] out OfrepEvaluationSuccess? value) =>
        _ofrepEvaluationSuccessValue.TryGetValue(out value);

    public bool TryGetOfrepEvaluationFailure([NotNullWhen(true)] out OfrepEvaluationFailure? value) =>
        _ofrepEvaluationFailureValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Flag(OfrepEvaluationSuccess value) => OfrepEvaluationSuccess(value);

    public static implicit operator Flag(OfrepEvaluationFailure value) => OfrepEvaluationFailure(value);

    public TResult Match<TResult>(Func<OfrepEvaluationSuccess, TResult> onOfrepEvaluationSuccess,
        Func<OfrepEvaluationFailure, TResult> onOfrepEvaluationFailure,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetOfrepEvaluationSuccess(out var ofrepEvaluationSuccessValue) => onOfrepEvaluationSuccess(
                ofrepEvaluationSuccessValue),
            _ when TryGetOfrepEvaluationFailure(out var ofrepEvaluationFailureValue) => onOfrepEvaluationFailure(
                ofrepEvaluationFailureValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Flag)} holds no value.")
        };

    public void Match(Action<OfrepEvaluationSuccess> onOfrepEvaluationSuccess,
        Action<OfrepEvaluationFailure> onOfrepEvaluationFailure,
        Action<JsonElement> otherwise)
    {
        if (TryGetOfrepEvaluationSuccess(out var ofrepEvaluationSuccessValue)) onOfrepEvaluationSuccess(
            ofrepEvaluationSuccessValue);
        else if (TryGetOfrepEvaluationFailure(out var ofrepEvaluationFailureValue)) onOfrepEvaluationFailure(
            ofrepEvaluationFailureValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Flag)} holds no value.");
    }
}

file sealed class FlagConverter : JsonConverter<Flag>
{
    public override Flag Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<OfrepEvaluationSuccess>(root, options, out var ofrepEvaluationSuccessValue))
        {
            return Flag.OfrepEvaluationSuccess(ofrepEvaluationSuccessValue);
        }
        if (JsonSerializer.TryDeserialize<OfrepEvaluationFailure>(root, options, out var ofrepEvaluationFailureValue))
        {
            return Flag.OfrepEvaluationFailure(ofrepEvaluationFailureValue);
        }
        return Flag.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Flag value, JsonSerializerOptions options)
    {
        if (value.TryGetOfrepEvaluationSuccess(out var ofrepEvaluationSuccessValue))
        {
            JsonSerializer.Serialize(writer, ofrepEvaluationSuccessValue, options);
        }
        else if (value.TryGetOfrepEvaluationFailure(out var ofrepEvaluationFailureValue))
        {
            JsonSerializer.Serialize(writer, ofrepEvaluationFailureValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Flag)} contains no valid value to serialize.");
        }
    }
}
