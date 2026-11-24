using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(LogprobsConverter))]
public record Logprobs
{
    private readonly Optional<ChoiceLogprobs> _choiceLogprobsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Logprobs(Optional<ChoiceLogprobs> choiceLogprobsValue, Optional<UnknownArm> unknownValue)
    {
        _choiceLogprobsValue = choiceLogprobsValue;
        _unknownValue = unknownValue;
    }

    public static Logprobs ChoiceLogprobs(ChoiceLogprobs value) => new(Optional<ChoiceLogprobs>.Some(value), default);

    internal static Logprobs Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetChoiceLogprobs([NotNullWhen(true)] out ChoiceLogprobs? value) =>
        _choiceLogprobsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Logprobs(ChoiceLogprobs value) => ChoiceLogprobs(value);

    public TResult Match<TResult>(Func<ChoiceLogprobs, TResult> onChoiceLogprobs,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetChoiceLogprobs(out var choiceLogprobsValue) => onChoiceLogprobs(choiceLogprobsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Logprobs)} holds no value.")
        };

    public void Match(Action<ChoiceLogprobs> onChoiceLogprobs, Action<JsonElement> otherwise)
    {
        if (TryGetChoiceLogprobs(out var choiceLogprobsValue)) onChoiceLogprobs(choiceLogprobsValue);
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
        if (JsonSerializer.TryDeserialize<ChoiceLogprobs>(root, options, out var choiceLogprobsValue))
        {
            return Logprobs.ChoiceLogprobs(choiceLogprobsValue);
        }
        return Logprobs.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Logprobs value, JsonSerializerOptions options)
    {
        if (value.TryGetChoiceLogprobs(out var choiceLogprobsValue))
        {
            JsonSerializer.Serialize(writer, choiceLogprobsValue, options);
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
