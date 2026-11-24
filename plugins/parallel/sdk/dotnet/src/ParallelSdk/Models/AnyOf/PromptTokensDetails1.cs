using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(PromptTokensDetails1Converter))]
public record PromptTokensDetails1
{
    private readonly Optional<PromptTokensDetails> _promptTokensDetailsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PromptTokensDetails1(Optional<PromptTokensDetails> promptTokensDetailsValue,
        Optional<UnknownArm> unknownValue)
    {
        _promptTokensDetailsValue = promptTokensDetailsValue;
        _unknownValue = unknownValue;
    }

    public static PromptTokensDetails1 PromptTokensDetails(PromptTokensDetails value) =>
        new(Optional<PromptTokensDetails>.Some(value), default);

    internal static PromptTokensDetails1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPromptTokensDetails([NotNullWhen(true)] out PromptTokensDetails? value) =>
        _promptTokensDetailsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PromptTokensDetails1(PromptTokensDetails value) => PromptTokensDetails(value);

    public TResult Match<TResult>(Func<PromptTokensDetails, TResult> onPromptTokensDetails,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPromptTokensDetails(out var promptTokensDetailsValue) => onPromptTokensDetails(
                promptTokensDetailsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PromptTokensDetails1)} holds no value.")
        };

    public void Match(Action<PromptTokensDetails> onPromptTokensDetails, Action<JsonElement> otherwise)
    {
        if (TryGetPromptTokensDetails(out var promptTokensDetailsValue)) onPromptTokensDetails(
            promptTokensDetailsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PromptTokensDetails1)} holds no value.");
    }
}

file sealed class PromptTokensDetails1Converter : JsonConverter<PromptTokensDetails1>
{
    public override PromptTokensDetails1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<PromptTokensDetails>(root, options, out var promptTokensDetailsValue))
        {
            return PromptTokensDetails1.PromptTokensDetails(promptTokensDetailsValue);
        }
        return PromptTokensDetails1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PromptTokensDetails1 value, JsonSerializerOptions options)
    {
        if (value.TryGetPromptTokensDetails(out var promptTokensDetailsValue))
        {
            JsonSerializer.Serialize(writer, promptTokensDetailsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PromptTokensDetails1)} contains no valid value to serialize.");
        }
    }
}
