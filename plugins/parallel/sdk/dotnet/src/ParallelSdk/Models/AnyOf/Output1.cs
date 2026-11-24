using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Output1Converter))]
public record Output1
{
    private readonly Optional<ModerationOutputModerationResults> _moderationOutputModerationResultsValue;

    private readonly Optional<ModerationOutputError1> _moderationOutputError1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Output1(Optional<ModerationOutputModerationResults> moderationOutputModerationResultsValue,
        Optional<ModerationOutputError1> moderationOutputError1Value,
        Optional<UnknownArm> unknownValue)
    {
        _moderationOutputModerationResultsValue = moderationOutputModerationResultsValue;
        _moderationOutputError1Value = moderationOutputError1Value;
        _unknownValue = unknownValue;
    }

    public static Output1 ModerationOutputModerationResults(ModerationOutputModerationResults value) =>
        new(Optional<ModerationOutputModerationResults>.Some(value), default, default);

    public static Output1 ModerationOutputError1(ModerationOutputError1 value) =>
        new(default, Optional<ModerationOutputError1>.Some(value), default);

    internal static Output1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModerationOutputModerationResults([NotNullWhen(true)] out ModerationOutputModerationResults? value) =>
        _moderationOutputModerationResultsValue.TryGetValue(out value);

    public bool TryGetModerationOutputError1([NotNullWhen(true)] out ModerationOutputError1? value) =>
        _moderationOutputError1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Output1(ModerationOutputModerationResults value) =>
        ModerationOutputModerationResults(value);

    public static implicit operator Output1(ModerationOutputError1 value) => ModerationOutputError1(value);

    public TResult Match<TResult>(Func<ModerationOutputModerationResults, TResult> onModerationOutputModerationResults,
        Func<ModerationOutputError1, TResult> onModerationOutputError1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModerationOutputModerationResults(
                out var moderationOutputModerationResultsValue) => onModerationOutputModerationResults(
                moderationOutputModerationResultsValue),
            _ when TryGetModerationOutputError1(out var moderationOutputError1Value) => onModerationOutputError1(
                moderationOutputError1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Output1)} holds no value.")
        };

    public void Match(Action<ModerationOutputModerationResults> onModerationOutputModerationResults,
        Action<ModerationOutputError1> onModerationOutputError1,
        Action<JsonElement> otherwise)
    {
        if (TryGetModerationOutputModerationResults(
            out var moderationOutputModerationResultsValue)) onModerationOutputModerationResults(
            moderationOutputModerationResultsValue);
        else if (TryGetModerationOutputError1(out var moderationOutputError1Value)) onModerationOutputError1(
            moderationOutputError1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Output1)} holds no value.");
    }
}

file sealed class Output1Converter : JsonConverter<Output1>
{
    public override Output1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ModerationOutputModerationResults>(
            root,
            options,
            out var moderationOutputModerationResultsValue))
        {
            return Output1.ModerationOutputModerationResults(moderationOutputModerationResultsValue);
        }
        if (JsonSerializer.TryDeserialize<ModerationOutputError1>(root, options, out var moderationOutputError1Value))
        {
            return Output1.ModerationOutputError1(moderationOutputError1Value);
        }
        return Output1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Output1 value, JsonSerializerOptions options)
    {
        if (value.TryGetModerationOutputModerationResults(out var moderationOutputModerationResultsValue))
        {
            JsonSerializer.Serialize(writer, moderationOutputModerationResultsValue, options);
        }
        else if (value.TryGetModerationOutputError1(out var moderationOutputError1Value))
        {
            JsonSerializer.Serialize(writer, moderationOutputError1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Output1)} contains no valid value to serialize.");
        }
    }
}
