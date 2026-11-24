using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// MCP tool calls made by the task.
/// </summary>
[JsonConverter(typeof(McpToolCallsConverter))]
public record McpToolCalls
{
    private readonly Optional<IReadOnlyList<McpToolCall>> _listOfMcpToolCallValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private McpToolCalls(Optional<IReadOnlyList<McpToolCall>> listOfMcpToolCallValue, Optional<UnknownArm> unknownValue)
    {
        _listOfMcpToolCallValue = listOfMcpToolCallValue;
        _unknownValue = unknownValue;
    }

    public static McpToolCalls ListOfMcpToolCall(IReadOnlyList<McpToolCall> value) =>
        new(Optional<IReadOnlyList<McpToolCall>>.Some(value), default);

    internal static McpToolCalls Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfMcpToolCall([NotNullWhen(true)] out IReadOnlyList<McpToolCall>? value) =>
        _listOfMcpToolCallValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<McpToolCall>, TResult> onListOfMcpToolCall,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfMcpToolCall(out var listOfMcpToolCallValue) => onListOfMcpToolCall(
                listOfMcpToolCallValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(McpToolCalls)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<McpToolCall>> onListOfMcpToolCall, Action<JsonElement> otherwise)
    {
        if (TryGetListOfMcpToolCall(out var listOfMcpToolCallValue)) onListOfMcpToolCall(listOfMcpToolCallValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(McpToolCalls)} holds no value.");
    }
}

file sealed class McpToolCallsConverter : JsonConverter<McpToolCalls>
{
    public override McpToolCalls Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<McpToolCall>>(root, options, out var listOfMcpToolCallValue))
        {
            return McpToolCalls.ListOfMcpToolCall(listOfMcpToolCallValue);
        }
        return McpToolCalls.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, McpToolCalls value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfMcpToolCall(out var listOfMcpToolCallValue))
        {
            JsonSerializer.Serialize(writer, listOfMcpToolCallValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(McpToolCalls)} contains no valid value to serialize.");
        }
    }
}
