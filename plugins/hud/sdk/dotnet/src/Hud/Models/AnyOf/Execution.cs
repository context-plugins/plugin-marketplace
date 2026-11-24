using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ExecutionConverter))]
public record Execution
{
    private readonly Optional<ToolExecution> _toolExecutionValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Execution(Optional<ToolExecution> toolExecutionValue, Optional<UnknownArm> unknownValue)
    {
        _toolExecutionValue = toolExecutionValue;
        _unknownValue = unknownValue;
    }

    public static Execution ToolExecution(ToolExecution value) => new(Optional<ToolExecution>.Some(value), default);

    internal static Execution Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetToolExecution([NotNullWhen(true)] out ToolExecution? value) =>
        _toolExecutionValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Execution(ToolExecution value) => ToolExecution(value);

    public TResult Match<TResult>(Func<ToolExecution, TResult> onToolExecution, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetToolExecution(out var toolExecutionValue) => onToolExecution(toolExecutionValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Execution)} holds no value.")
        };

    public void Match(Action<ToolExecution> onToolExecution, Action<JsonElement> otherwise)
    {
        if (TryGetToolExecution(out var toolExecutionValue)) onToolExecution(toolExecutionValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Execution)} holds no value.");
    }
}

file sealed class ExecutionConverter : JsonConverter<Execution>
{
    public override Execution Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ToolExecution>(root, options, out var toolExecutionValue))
        {
            return Execution.ToolExecution(toolExecutionValue);
        }
        return Execution.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Execution value, JsonSerializerOptions options)
    {
        if (value.TryGetToolExecution(out var toolExecutionValue))
        {
            JsonSerializer.Serialize(writer, toolExecutionValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Execution)} contains no valid value to serialize.");
        }
    }
}
