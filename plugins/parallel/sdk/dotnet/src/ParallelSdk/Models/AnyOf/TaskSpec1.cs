using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Task specification. If unspecified, defaults to auto output schema.
/// </summary>
[JsonConverter(typeof(TaskSpec1Converter))]
public record TaskSpec1
{
    private readonly Optional<TaskSpec> _taskSpecValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TaskSpec1(Optional<TaskSpec> taskSpecValue, Optional<UnknownArm> unknownValue)
    {
        _taskSpecValue = taskSpecValue;
        _unknownValue = unknownValue;
    }

    public static TaskSpec1 TaskSpec(TaskSpec value) => new(Optional<TaskSpec>.Some(value), default);

    internal static TaskSpec1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskSpec([NotNullWhen(true)] out TaskSpec? value) => _taskSpecValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TaskSpec1(TaskSpec value) => TaskSpec(value);

    public TResult Match<TResult>(Func<TaskSpec, TResult> onTaskSpec, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskSpec(out var taskSpecValue) => onTaskSpec(taskSpecValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TaskSpec1)} holds no value.")
        };

    public void Match(Action<TaskSpec> onTaskSpec, Action<JsonElement> otherwise)
    {
        if (TryGetTaskSpec(out var taskSpecValue)) onTaskSpec(taskSpecValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TaskSpec1)} holds no value.");
    }
}

file sealed class TaskSpec1Converter : JsonConverter<TaskSpec1>
{
    public override TaskSpec1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TaskSpec>(root, options, out var taskSpecValue))
        {
            return TaskSpec1.TaskSpec(taskSpecValue);
        }
        return TaskSpec1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TaskSpec1 value, JsonSerializerOptions options)
    {
        if (value.TryGetTaskSpec(out var taskSpecValue))
        {
            JsonSerializer.Serialize(writer, taskSpecValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TaskSpec1)} contains no valid value to serialize.");
        }
    }
}
