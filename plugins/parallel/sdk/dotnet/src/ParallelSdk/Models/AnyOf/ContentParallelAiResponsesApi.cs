using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Text content of the message. Either a string or a list of content parts (<c>{text, type}</c> objects) for OpenAI SDK clients.
/// </summary>
[JsonConverter(typeof(ContentParallelAiResponsesApiConverter))]
public record ContentParallelAiResponsesApi
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<IReadOnlyList<ResponseInputContentPart>> _listOfResponseInputContentPartValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ContentParallelAiResponsesApi(Optional<string> stringValue,
        Optional<IReadOnlyList<ResponseInputContentPart>> listOfResponseInputContentPartValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _listOfResponseInputContentPartValue = listOfResponseInputContentPartValue;
        _unknownValue = unknownValue;
    }

    public static ContentParallelAiResponsesApi String(string value) =>
        new(Optional<string>.Some(value), default, default);

    public static ContentParallelAiResponsesApi ListOfResponseInputContentPart(IReadOnlyList<ResponseInputContentPart> value) =>
        new(default, Optional<IReadOnlyList<ResponseInputContentPart>>.Some(value), default);

    internal static ContentParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetListOfResponseInputContentPart([NotNullWhen(true)] out IReadOnlyList<ResponseInputContentPart>? value) =>
        _listOfResponseInputContentPartValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ContentParallelAiResponsesApi(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<IReadOnlyList<ResponseInputContentPart>, TResult> onListOfResponseInputContentPart,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetListOfResponseInputContentPart(
                out var listOfResponseInputContentPartValue) => onListOfResponseInputContentPart(
                listOfResponseInputContentPartValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ContentParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<IReadOnlyList<ResponseInputContentPart>> onListOfResponseInputContentPart,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetListOfResponseInputContentPart(
            out var listOfResponseInputContentPartValue)) onListOfResponseInputContentPart(
            listOfResponseInputContentPartValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ContentParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class ContentParallelAiResponsesApiConverter : JsonConverter<ContentParallelAiResponsesApi>
{
    public override ContentParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return ContentParallelAiResponsesApi.String(value);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ResponseInputContentPart>>(
            root,
            options,
            out var listOfResponseInputContentPartValue))
        {
            return ContentParallelAiResponsesApi.ListOfResponseInputContentPart(listOfResponseInputContentPartValue);
        }
        return ContentParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ContentParallelAiResponsesApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetListOfResponseInputContentPart(out var listOfResponseInputContentPartValue))
        {
            JsonSerializer.Serialize(writer, listOfResponseInputContentPartValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ContentParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
