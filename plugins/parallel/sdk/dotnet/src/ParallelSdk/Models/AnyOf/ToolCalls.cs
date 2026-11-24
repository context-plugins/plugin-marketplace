using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(ToolCallsConverter))]
public record ToolCalls
{
    private readonly Optional<IReadOnlyList<ChoiceDeltaToolCall>> _listOfChoiceDeltaToolCallValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ToolCalls(Optional<IReadOnlyList<ChoiceDeltaToolCall>> listOfChoiceDeltaToolCallValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfChoiceDeltaToolCallValue = listOfChoiceDeltaToolCallValue;
        _unknownValue = unknownValue;
    }

    public static ToolCalls ListOfChoiceDeltaToolCall(IReadOnlyList<ChoiceDeltaToolCall> value) =>
        new(Optional<IReadOnlyList<ChoiceDeltaToolCall>>.Some(value), default);

    internal static ToolCalls Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfChoiceDeltaToolCall([NotNullWhen(true)] out IReadOnlyList<ChoiceDeltaToolCall>? value) =>
        _listOfChoiceDeltaToolCallValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<ChoiceDeltaToolCall>, TResult> onListOfChoiceDeltaToolCall,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfChoiceDeltaToolCall(
                out var listOfChoiceDeltaToolCallValue) => onListOfChoiceDeltaToolCall(listOfChoiceDeltaToolCallValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ToolCalls)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<ChoiceDeltaToolCall>> onListOfChoiceDeltaToolCall,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfChoiceDeltaToolCall(out var listOfChoiceDeltaToolCallValue)) onListOfChoiceDeltaToolCall(
            listOfChoiceDeltaToolCallValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ToolCalls)} holds no value.");
    }
}

file sealed class ToolCallsConverter : JsonConverter<ToolCalls>
{
    public override ToolCalls Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ChoiceDeltaToolCall>>(
            root,
            options,
            out var listOfChoiceDeltaToolCallValue))
        {
            return ToolCalls.ListOfChoiceDeltaToolCall(listOfChoiceDeltaToolCallValue);
        }
        return ToolCalls.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ToolCalls value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfChoiceDeltaToolCall(out var listOfChoiceDeltaToolCallValue))
        {
            JsonSerializer.Serialize(writer, listOfChoiceDeltaToolCallValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ToolCalls)} contains no valid value to serialize.");
        }
    }
}
