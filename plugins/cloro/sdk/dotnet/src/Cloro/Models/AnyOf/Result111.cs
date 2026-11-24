using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cloro.Core.Extensions;
using Cloro.Core.Models;

namespace Cloro.Models.AnyOf;

/// <summary>
/// ChatGPT's response data. An array, with one response for each prompt in order, when <c>prompt</c> is an array.
/// </summary>
[JsonConverter(typeof(Result111Converter))]
public record Result111
{
    private readonly Optional<ChatGptResult> _chatGptResultValue;

    private readonly Optional<IReadOnlyList<ChatGptResult>> _listOfChatGptResultValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Result111(Optional<ChatGptResult> chatGptResultValue,
        Optional<IReadOnlyList<ChatGptResult>> listOfChatGptResultValue,
        Optional<UnknownArm> unknownValue)
    {
        _chatGptResultValue = chatGptResultValue;
        _listOfChatGptResultValue = listOfChatGptResultValue;
        _unknownValue = unknownValue;
    }

    public static Result111 ChatGptResult(ChatGptResult value) =>
        new(Optional<ChatGptResult>.Some(value), default, default);

    public static Result111 ListOfChatGptResult(IReadOnlyList<ChatGptResult> value) =>
        new(default, Optional<IReadOnlyList<ChatGptResult>>.Some(value), default);

    internal static Result111 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetChatGptResult([NotNullWhen(true)] out ChatGptResult? value) =>
        _chatGptResultValue.TryGetValue(out value);

    public bool TryGetListOfChatGptResult([NotNullWhen(true)] out IReadOnlyList<ChatGptResult>? value) =>
        _listOfChatGptResultValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Result111(ChatGptResult value) => ChatGptResult(value);

    public TResult Match<TResult>(Func<ChatGptResult, TResult> onChatGptResult,
        Func<IReadOnlyList<ChatGptResult>, TResult> onListOfChatGptResult,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetChatGptResult(out var chatGptResultValue) => onChatGptResult(chatGptResultValue),
            _ when TryGetListOfChatGptResult(out var listOfChatGptResultValue) => onListOfChatGptResult(
                listOfChatGptResultValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Result111)} holds no value.")
        };

    public void Match(Action<ChatGptResult> onChatGptResult,
        Action<IReadOnlyList<ChatGptResult>> onListOfChatGptResult,
        Action<JsonElement> otherwise)
    {
        if (TryGetChatGptResult(out var chatGptResultValue)) onChatGptResult(chatGptResultValue);
        else if (TryGetListOfChatGptResult(out var listOfChatGptResultValue)) onListOfChatGptResult(
            listOfChatGptResultValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Result111)} holds no value.");
    }
}

file sealed class Result111Converter : JsonConverter<Result111>
{
    public override Result111 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ChatGptResult>(root, options, out var chatGptResultValue))
        {
            return Result111.ChatGptResult(chatGptResultValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ChatGptResult>>(
            root,
            options,
            out var listOfChatGptResultValue))
        {
            return Result111.ListOfChatGptResult(listOfChatGptResultValue);
        }
        return Result111.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Result111 value, JsonSerializerOptions options)
    {
        if (value.TryGetChatGptResult(out var chatGptResultValue))
        {
            JsonSerializer.Serialize(writer, chatGptResultValue, options);
        }
        else if (value.TryGetListOfChatGptResult(out var listOfChatGptResultValue))
        {
            JsonSerializer.Serialize(writer, listOfChatGptResultValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Result111)} contains no valid value to serialize.");
        }
    }
}
