using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Input1Converter))]
public record Input1
{
    private readonly Optional<ModerationInputModerationResults> _moderationInputModerationResultsValue;

    private readonly Optional<ModerationInputError1> _moderationInputError1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Input1(Optional<ModerationInputModerationResults> moderationInputModerationResultsValue,
        Optional<ModerationInputError1> moderationInputError1Value,
        Optional<UnknownArm> unknownValue)
    {
        _moderationInputModerationResultsValue = moderationInputModerationResultsValue;
        _moderationInputError1Value = moderationInputError1Value;
        _unknownValue = unknownValue;
    }

    public static Input1 ModerationInputModerationResults(ModerationInputModerationResults value) =>
        new(Optional<ModerationInputModerationResults>.Some(value), default, default);

    public static Input1 ModerationInputError1(ModerationInputError1 value) =>
        new(default, Optional<ModerationInputError1>.Some(value), default);

    internal static Input1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModerationInputModerationResults([NotNullWhen(true)] out ModerationInputModerationResults? value) =>
        _moderationInputModerationResultsValue.TryGetValue(out value);

    public bool TryGetModerationInputError1([NotNullWhen(true)] out ModerationInputError1? value) =>
        _moderationInputError1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Input1(ModerationInputModerationResults value) =>
        ModerationInputModerationResults(value);

    public static implicit operator Input1(ModerationInputError1 value) => ModerationInputError1(value);

    public TResult Match<TResult>(Func<ModerationInputModerationResults, TResult> onModerationInputModerationResults,
        Func<ModerationInputError1, TResult> onModerationInputError1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModerationInputModerationResults(
                out var moderationInputModerationResultsValue) => onModerationInputModerationResults(
                moderationInputModerationResultsValue),
            _ when TryGetModerationInputError1(out var moderationInputError1Value) => onModerationInputError1(
                moderationInputError1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Input1)} holds no value.")
        };

    public void Match(Action<ModerationInputModerationResults> onModerationInputModerationResults,
        Action<ModerationInputError1> onModerationInputError1,
        Action<JsonElement> otherwise)
    {
        if (TryGetModerationInputModerationResults(
            out var moderationInputModerationResultsValue)) onModerationInputModerationResults(
            moderationInputModerationResultsValue);
        else if (TryGetModerationInputError1(out var moderationInputError1Value)) onModerationInputError1(
            moderationInputError1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Input1)} holds no value.");
    }
}

file sealed class Input1Converter : JsonConverter<Input1>
{
    public override Input1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ModerationInputModerationResults>(
            root,
            options,
            out var moderationInputModerationResultsValue))
        {
            return Input1.ModerationInputModerationResults(moderationInputModerationResultsValue);
        }
        if (JsonSerializer.TryDeserialize<ModerationInputError1>(root, options, out var moderationInputError1Value))
        {
            return Input1.ModerationInputError1(moderationInputError1Value);
        }
        return Input1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Input1 value, JsonSerializerOptions options)
    {
        if (value.TryGetModerationInputModerationResults(out var moderationInputModerationResultsValue))
        {
            JsonSerializer.Serialize(writer, moderationInputModerationResultsValue, options);
        }
        else if (value.TryGetModerationInputError1(out var moderationInputError1Value))
        {
            JsonSerializer.Serialize(writer, moderationInputError1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Input1)} contains no valid value to serialize.");
        }
    }
}
