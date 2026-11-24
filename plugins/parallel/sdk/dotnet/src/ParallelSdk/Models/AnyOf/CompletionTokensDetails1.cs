using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(CompletionTokensDetails1Converter))]
public record CompletionTokensDetails1
{
    private readonly Optional<CompletionTokensDetails> _completionTokensDetailsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CompletionTokensDetails1(Optional<CompletionTokensDetails> completionTokensDetailsValue,
        Optional<UnknownArm> unknownValue)
    {
        _completionTokensDetailsValue = completionTokensDetailsValue;
        _unknownValue = unknownValue;
    }

    public static CompletionTokensDetails1 CompletionTokensDetails(CompletionTokensDetails value) =>
        new(Optional<CompletionTokensDetails>.Some(value), default);

    internal static CompletionTokensDetails1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCompletionTokensDetails([NotNullWhen(true)] out CompletionTokensDetails? value) =>
        _completionTokensDetailsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CompletionTokensDetails1(CompletionTokensDetails value) =>
        CompletionTokensDetails(value);

    public TResult Match<TResult>(Func<CompletionTokensDetails, TResult> onCompletionTokensDetails,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCompletionTokensDetails(out var completionTokensDetailsValue) => onCompletionTokensDetails(
                completionTokensDetailsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CompletionTokensDetails1)} holds no value.")
        };

    public void Match(Action<CompletionTokensDetails> onCompletionTokensDetails, Action<JsonElement> otherwise)
    {
        if (TryGetCompletionTokensDetails(out var completionTokensDetailsValue)) onCompletionTokensDetails(
            completionTokensDetailsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CompletionTokensDetails1)} holds no value.");
    }
}

file sealed class CompletionTokensDetails1Converter : JsonConverter<CompletionTokensDetails1>
{
    public override CompletionTokensDetails1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CompletionTokensDetails>(root, options, out var completionTokensDetailsValue))
        {
            return CompletionTokensDetails1.CompletionTokensDetails(completionTokensDetailsValue);
        }
        return CompletionTokensDetails1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CompletionTokensDetails1 value, JsonSerializerOptions options)
    {
        if (value.TryGetCompletionTokensDetails(out var completionTokensDetailsValue))
        {
            JsonSerializer.Serialize(writer, completionTokensDetailsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CompletionTokensDetails1)} contains no valid value to serialize.");
        }
    }
}
