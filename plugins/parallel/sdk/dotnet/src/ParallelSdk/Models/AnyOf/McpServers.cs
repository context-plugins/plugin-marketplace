using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// List of MCP servers to use for the task.
/// </summary>
[JsonConverter(typeof(McpServersConverter))]
public record McpServers
{
    private readonly Optional<IReadOnlyList<McpServer>> _listOfMcpServerValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private McpServers(Optional<IReadOnlyList<McpServer>> listOfMcpServerValue, Optional<UnknownArm> unknownValue)
    {
        _listOfMcpServerValue = listOfMcpServerValue;
        _unknownValue = unknownValue;
    }

    public static McpServers ListOfMcpServer(IReadOnlyList<McpServer> value) =>
        new(Optional<IReadOnlyList<McpServer>>.Some(value), default);

    internal static McpServers Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfMcpServer([NotNullWhen(true)] out IReadOnlyList<McpServer>? value) =>
        _listOfMcpServerValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<McpServer>, TResult> onListOfMcpServer,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfMcpServer(out var listOfMcpServerValue) => onListOfMcpServer(listOfMcpServerValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(McpServers)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<McpServer>> onListOfMcpServer, Action<JsonElement> otherwise)
    {
        if (TryGetListOfMcpServer(out var listOfMcpServerValue)) onListOfMcpServer(listOfMcpServerValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(McpServers)} holds no value.");
    }
}

file sealed class McpServersConverter : JsonConverter<McpServers>
{
    public override McpServers Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<McpServer>>(root, options, out var listOfMcpServerValue))
        {
            return McpServers.ListOfMcpServer(listOfMcpServerValue);
        }
        return McpServers.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, McpServers value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfMcpServer(out var listOfMcpServerValue))
        {
            JsonSerializer.Serialize(writer, listOfMcpServerValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(McpServers)} contains no valid value to serialize.");
        }
    }
}
