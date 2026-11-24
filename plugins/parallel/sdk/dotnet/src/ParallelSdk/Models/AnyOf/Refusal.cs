using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(RefusalConverter))]
public record Refusal
{
    private readonly Optional<IReadOnlyList<ChatCompletionTokenLogprob>> _listOfChatCompletionTokenLogprobValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Refusal(Optional<IReadOnlyList<ChatCompletionTokenLogprob>> listOfChatCompletionTokenLogprobValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfChatCompletionTokenLogprobValue = listOfChatCompletionTokenLogprobValue;
        _unknownValue = unknownValue;
    }

    public static Refusal ListOfChatCompletionTokenLogprob(IReadOnlyList<ChatCompletionTokenLogprob> value) =>
        new(Optional<IReadOnlyList<ChatCompletionTokenLogprob>>.Some(value), default);

    internal static Refusal Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfChatCompletionTokenLogprob([NotNullWhen(true)] out IReadOnlyList<ChatCompletionTokenLogprob>? value) =>
        _listOfChatCompletionTokenLogprobValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<ChatCompletionTokenLogprob>, TResult> onListOfChatCompletionTokenLogprob,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfChatCompletionTokenLogprob(
                out var listOfChatCompletionTokenLogprobValue) => onListOfChatCompletionTokenLogprob(
                listOfChatCompletionTokenLogprobValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Refusal)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<ChatCompletionTokenLogprob>> onListOfChatCompletionTokenLogprob,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfChatCompletionTokenLogprob(
            out var listOfChatCompletionTokenLogprobValue)) onListOfChatCompletionTokenLogprob(
            listOfChatCompletionTokenLogprobValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Refusal)} holds no value.");
    }
}

file sealed class RefusalConverter : JsonConverter<Refusal>
{
    public override Refusal Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ChatCompletionTokenLogprob>>(
            root,
            options,
            out var listOfChatCompletionTokenLogprobValue))
        {
            return Refusal.ListOfChatCompletionTokenLogprob(listOfChatCompletionTokenLogprobValue);
        }
        return Refusal.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Refusal value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfChatCompletionTokenLogprob(out var listOfChatCompletionTokenLogprobValue))
        {
            JsonSerializer.Serialize(writer, listOfChatCompletionTokenLogprobValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Refusal)} contains no valid value to serialize.");
        }
    }
}
