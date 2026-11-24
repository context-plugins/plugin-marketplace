using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Optional list of MCP servers to use for the run.
/// </summary>
[JsonConverter(typeof(McpServersParallelAiTasksApiConverter))]
public record McpServersParallelAiTasksApi
{
    private readonly Optional<IReadOnlyList<McpServerParallelAiTasksApi>> _listOfMcpServerParallelAiTasksApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private McpServersParallelAiTasksApi(Optional<IReadOnlyList<McpServerParallelAiTasksApi>> listOfMcpServerParallelAiTasksApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfMcpServerParallelAiTasksApiValue = listOfMcpServerParallelAiTasksApiValue;
        _unknownValue = unknownValue;
    }

    public static McpServersParallelAiTasksApi ListOfMcpServerParallelAiTasksApi(IReadOnlyList<McpServerParallelAiTasksApi> value) =>
        new(Optional<IReadOnlyList<McpServerParallelAiTasksApi>>.Some(value), default);

    internal static McpServersParallelAiTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfMcpServerParallelAiTasksApi([NotNullWhen(true)] out IReadOnlyList<McpServerParallelAiTasksApi>? value) =>
        _listOfMcpServerParallelAiTasksApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<McpServerParallelAiTasksApi>, TResult> onListOfMcpServerParallelAiTasksApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfMcpServerParallelAiTasksApi(
                out var listOfMcpServerParallelAiTasksApiValue) => onListOfMcpServerParallelAiTasksApi(
                listOfMcpServerParallelAiTasksApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(McpServersParallelAiTasksApi)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<McpServerParallelAiTasksApi>> onListOfMcpServerParallelAiTasksApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfMcpServerParallelAiTasksApi(
            out var listOfMcpServerParallelAiTasksApiValue)) onListOfMcpServerParallelAiTasksApi(
            listOfMcpServerParallelAiTasksApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(McpServersParallelAiTasksApi)} holds no value.");
    }
}

file sealed class McpServersParallelAiTasksApiConverter : JsonConverter<McpServersParallelAiTasksApi>
{
    public override McpServersParallelAiTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<McpServerParallelAiTasksApi>>(
            root,
            options,
            out var listOfMcpServerParallelAiTasksApiValue))
        {
            return McpServersParallelAiTasksApi.ListOfMcpServerParallelAiTasksApi(
                listOfMcpServerParallelAiTasksApiValue);
        }
        return McpServersParallelAiTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, McpServersParallelAiTasksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfMcpServerParallelAiTasksApi(out var listOfMcpServerParallelAiTasksApiValue))
        {
            JsonSerializer.Serialize(writer, listOfMcpServerParallelAiTasksApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(McpServersParallelAiTasksApi)} contains no valid value to serialize.");
        }
    }
}
