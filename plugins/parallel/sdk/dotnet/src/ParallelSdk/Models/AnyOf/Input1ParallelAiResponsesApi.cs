using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// The input to generate a response for: a plain string, or a list of role/content messages that includes at least one <c>user</c> message. Must be non-empty, and only text content is supported. <c>input</c> and <c>instructions</c> together may total at most 20,000 characters.
/// </summary>
[JsonConverter(typeof(Input1ParallelAiResponsesApiConverter))]
public record Input1ParallelAiResponsesApi
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<IReadOnlyList<ResponseInputMessage>> _listOfResponseInputMessageValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Input1ParallelAiResponsesApi(Optional<string> stringValue,
        Optional<IReadOnlyList<ResponseInputMessage>> listOfResponseInputMessageValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _listOfResponseInputMessageValue = listOfResponseInputMessageValue;
        _unknownValue = unknownValue;
    }

    public static Input1ParallelAiResponsesApi String(string value) =>
        new(Optional<string>.Some(value), default, default);

    public static Input1ParallelAiResponsesApi ListOfResponseInputMessage(IReadOnlyList<ResponseInputMessage> value) =>
        new(default, Optional<IReadOnlyList<ResponseInputMessage>>.Some(value), default);

    internal static Input1ParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetListOfResponseInputMessage([NotNullWhen(true)] out IReadOnlyList<ResponseInputMessage>? value) =>
        _listOfResponseInputMessageValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Input1ParallelAiResponsesApi(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<IReadOnlyList<ResponseInputMessage>, TResult> onListOfResponseInputMessage,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetListOfResponseInputMessage(
                out var listOfResponseInputMessageValue) => onListOfResponseInputMessage(
                listOfResponseInputMessageValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Input1ParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<IReadOnlyList<ResponseInputMessage>> onListOfResponseInputMessage,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetListOfResponseInputMessage(
            out var listOfResponseInputMessageValue)) onListOfResponseInputMessage(listOfResponseInputMessageValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Input1ParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class Input1ParallelAiResponsesApiConverter : JsonConverter<Input1ParallelAiResponsesApi>
{
    public override Input1ParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Input1ParallelAiResponsesApi.String(value);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ResponseInputMessage>>(
            root,
            options,
            out var listOfResponseInputMessageValue))
        {
            return Input1ParallelAiResponsesApi.ListOfResponseInputMessage(listOfResponseInputMessageValue);
        }
        return Input1ParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Input1ParallelAiResponsesApi value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetListOfResponseInputMessage(out var listOfResponseInputMessageValue))
        {
            JsonSerializer.Serialize(writer, listOfResponseInputMessageValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Input1ParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
