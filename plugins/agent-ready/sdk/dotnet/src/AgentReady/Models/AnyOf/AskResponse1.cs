using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AgentReady.Core.Extensions;
using AgentReady.Core.Models;

namespace AgentReady.Models.AnyOf;

/// <summary>
/// Either an answer or a failure.
/// </summary>
[JsonConverter(typeof(AskResponse1Converter))]
public record AskResponse1
{
    private readonly Optional<AskAnswer> _askAnswerValue;

    private readonly Optional<AskFailure> _askFailureValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AskResponse1(Optional<AskAnswer> askAnswerValue,
        Optional<AskFailure> askFailureValue,
        Optional<UnknownArm> unknownValue)
    {
        _askAnswerValue = askAnswerValue;
        _askFailureValue = askFailureValue;
        _unknownValue = unknownValue;
    }

    public static AskResponse1 AskAnswer(AskAnswer value) => new(Optional<AskAnswer>.Some(value), default, default);

    public static AskResponse1 AskFailure(AskFailure value) => new(default, Optional<AskFailure>.Some(value), default);

    internal static AskResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAskAnswer([NotNullWhen(true)] out AskAnswer? value) => _askAnswerValue.TryGetValue(out value);

    public bool TryGetAskFailure([NotNullWhen(true)] out AskFailure? value) => _askFailureValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AskResponse1(AskAnswer value) => AskAnswer(value);

    public static implicit operator AskResponse1(AskFailure value) => AskFailure(value);

    public TResult Match<TResult>(Func<AskAnswer, TResult> onAskAnswer,
        Func<AskFailure, TResult> onAskFailure,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAskAnswer(out var askAnswerValue) => onAskAnswer(askAnswerValue),
            _ when TryGetAskFailure(out var askFailureValue) => onAskFailure(askFailureValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AskResponse1)} holds no value.")
        };

    public void Match(Action<AskAnswer> onAskAnswer, Action<AskFailure> onAskFailure, Action<JsonElement> otherwise)
    {
        if (TryGetAskAnswer(out var askAnswerValue)) onAskAnswer(askAnswerValue);
        else if (TryGetAskFailure(out var askFailureValue)) onAskFailure(askFailureValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AskResponse1)} holds no value.");
    }
}

file sealed class AskResponse1Converter : JsonConverter<AskResponse1>
{
    public override AskResponse1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AskAnswer>(root, options, out var askAnswerValue))
        {
            return AskResponse1.AskAnswer(askAnswerValue);
        }
        if (JsonSerializer.TryDeserialize<AskFailure>(root, options, out var askFailureValue))
        {
            return AskResponse1.AskFailure(askFailureValue);
        }
        return AskResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AskResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetAskAnswer(out var askAnswerValue))
        {
            JsonSerializer.Serialize(writer, askAnswerValue, options);
        }
        else if (value.TryGetAskFailure(out var askFailureValue))
        {
            JsonSerializer.Serialize(writer, askFailureValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AskResponse1)} contains no valid value to serialize.");
        }
    }
}
