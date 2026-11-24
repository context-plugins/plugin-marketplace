using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(InputConverter))]
public record Input
{
    private readonly Optional<ModerationInputModerationResult> _moderationInputModerationResultValue;

    private readonly Optional<ModerationInputError> _moderationInputErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Input(Optional<ModerationInputModerationResult> moderationInputModerationResultValue,
        Optional<ModerationInputError> moderationInputErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _moderationInputModerationResultValue = moderationInputModerationResultValue;
        _moderationInputErrorValue = moderationInputErrorValue;
        _unknownValue = unknownValue;
    }

    public static Input ModerationInputModerationResult(ModerationInputModerationResult value) =>
        new(Optional<ModerationInputModerationResult>.Some(value), default, default);

    public static Input ModerationInputError(ModerationInputError value) =>
        new(default, Optional<ModerationInputError>.Some(value), default);

    internal static Input Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModerationInputModerationResult([NotNullWhen(true)] out ModerationInputModerationResult? value) =>
        _moderationInputModerationResultValue.TryGetValue(out value);

    public bool TryGetModerationInputError([NotNullWhen(true)] out ModerationInputError? value) =>
        _moderationInputErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Input(ModerationInputModerationResult value) =>
        ModerationInputModerationResult(value);

    public static implicit operator Input(ModerationInputError value) => ModerationInputError(value);

    public TResult Match<TResult>(Func<ModerationInputModerationResult, TResult> onModerationInputModerationResult,
        Func<ModerationInputError, TResult> onModerationInputError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModerationInputModerationResult(
                out var moderationInputModerationResultValue) => onModerationInputModerationResult(
                moderationInputModerationResultValue),
            _ when TryGetModerationInputError(out var moderationInputErrorValue) => onModerationInputError(
                moderationInputErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Input)} holds no value.")
        };

    public void Match(Action<ModerationInputModerationResult> onModerationInputModerationResult,
        Action<ModerationInputError> onModerationInputError,
        Action<JsonElement> otherwise)
    {
        if (TryGetModerationInputModerationResult(
            out var moderationInputModerationResultValue)) onModerationInputModerationResult(
            moderationInputModerationResultValue);
        else if (TryGetModerationInputError(out var moderationInputErrorValue)) onModerationInputError(
            moderationInputErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Input)} holds no value.");
    }
}

file sealed class InputConverter : JsonConverter<Input>
{
    public override Input Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ModerationInputModerationResult>(
            root,
            options,
            out var moderationInputModerationResultValue))
        {
            return Input.ModerationInputModerationResult(moderationInputModerationResultValue);
        }
        if (JsonSerializer.TryDeserialize<ModerationInputError>(root, options, out var moderationInputErrorValue))
        {
            return Input.ModerationInputError(moderationInputErrorValue);
        }
        return Input.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Input value, JsonSerializerOptions options)
    {
        if (value.TryGetModerationInputModerationResult(out var moderationInputModerationResultValue))
        {
            JsonSerializer.Serialize(writer, moderationInputModerationResultValue, options);
        }
        else if (value.TryGetModerationInputError(out var moderationInputErrorValue))
        {
            JsonSerializer.Serialize(writer, moderationInputErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Input)} contains no valid value to serialize.");
        }
    }
}
