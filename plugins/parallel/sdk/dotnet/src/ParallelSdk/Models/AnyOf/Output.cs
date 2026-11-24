using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(OutputConverter))]
public record Output
{
    private readonly Optional<ModerationOutputModerationResult> _moderationOutputModerationResultValue;

    private readonly Optional<ModerationOutputError> _moderationOutputErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Output(Optional<ModerationOutputModerationResult> moderationOutputModerationResultValue,
        Optional<ModerationOutputError> moderationOutputErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _moderationOutputModerationResultValue = moderationOutputModerationResultValue;
        _moderationOutputErrorValue = moderationOutputErrorValue;
        _unknownValue = unknownValue;
    }

    public static Output ModerationOutputModerationResult(ModerationOutputModerationResult value) =>
        new(Optional<ModerationOutputModerationResult>.Some(value), default, default);

    public static Output ModerationOutputError(ModerationOutputError value) =>
        new(default, Optional<ModerationOutputError>.Some(value), default);

    internal static Output Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModerationOutputModerationResult([NotNullWhen(true)] out ModerationOutputModerationResult? value) =>
        _moderationOutputModerationResultValue.TryGetValue(out value);

    public bool TryGetModerationOutputError([NotNullWhen(true)] out ModerationOutputError? value) =>
        _moderationOutputErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Output(ModerationOutputModerationResult value) =>
        ModerationOutputModerationResult(value);

    public static implicit operator Output(ModerationOutputError value) => ModerationOutputError(value);

    public TResult Match<TResult>(Func<ModerationOutputModerationResult, TResult> onModerationOutputModerationResult,
        Func<ModerationOutputError, TResult> onModerationOutputError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModerationOutputModerationResult(
                out var moderationOutputModerationResultValue) => onModerationOutputModerationResult(
                moderationOutputModerationResultValue),
            _ when TryGetModerationOutputError(out var moderationOutputErrorValue) => onModerationOutputError(
                moderationOutputErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Output)} holds no value.")
        };

    public void Match(Action<ModerationOutputModerationResult> onModerationOutputModerationResult,
        Action<ModerationOutputError> onModerationOutputError,
        Action<JsonElement> otherwise)
    {
        if (TryGetModerationOutputModerationResult(
            out var moderationOutputModerationResultValue)) onModerationOutputModerationResult(
            moderationOutputModerationResultValue);
        else if (TryGetModerationOutputError(out var moderationOutputErrorValue)) onModerationOutputError(
            moderationOutputErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Output)} holds no value.");
    }
}

file sealed class OutputConverter : JsonConverter<Output>
{
    public override Output Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ModerationOutputModerationResult>(
            root,
            options,
            out var moderationOutputModerationResultValue))
        {
            return Output.ModerationOutputModerationResult(moderationOutputModerationResultValue);
        }
        if (JsonSerializer.TryDeserialize<ModerationOutputError>(root, options, out var moderationOutputErrorValue))
        {
            return Output.ModerationOutputError(moderationOutputErrorValue);
        }
        return Output.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Output value, JsonSerializerOptions options)
    {
        if (value.TryGetModerationOutputModerationResult(out var moderationOutputModerationResultValue))
        {
            JsonSerializer.Serialize(writer, moderationOutputModerationResultValue, options);
        }
        else if (value.TryGetModerationOutputError(out var moderationOutputErrorValue))
        {
            JsonSerializer.Serialize(writer, moderationOutputErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Output)} contains no valid value to serialize.");
        }
    }
}
