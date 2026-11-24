using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(ContentConverter))]
public record Content
{
    private readonly Optional<IReadOnlyList<ChatCompletionTokenLogprob>> _listOfChatCompletionTokenLogprobValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Content(Optional<IReadOnlyList<ChatCompletionTokenLogprob>> listOfChatCompletionTokenLogprobValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfChatCompletionTokenLogprobValue = listOfChatCompletionTokenLogprobValue;
        _unknownValue = unknownValue;
    }

    public static Content ListOfChatCompletionTokenLogprob(IReadOnlyList<ChatCompletionTokenLogprob> value) =>
        new(Optional<IReadOnlyList<ChatCompletionTokenLogprob>>.Some(value), default);

    internal static Content Unknown(JsonElement value) =>
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
            _ => throw new InvalidOperationException($"{nameof(Content)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<ChatCompletionTokenLogprob>> onListOfChatCompletionTokenLogprob,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfChatCompletionTokenLogprob(
            out var listOfChatCompletionTokenLogprobValue)) onListOfChatCompletionTokenLogprob(
            listOfChatCompletionTokenLogprobValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Content)} holds no value.");
    }
}

file sealed class ContentConverter : JsonConverter<Content>
{
    public override Content Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ChatCompletionTokenLogprob>>(
            root,
            options,
            out var listOfChatCompletionTokenLogprobValue))
        {
            return Content.ListOfChatCompletionTokenLogprob(listOfChatCompletionTokenLogprobValue);
        }
        return Content.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Content value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Content)} contains no valid value to serialize.");
        }
    }
}
