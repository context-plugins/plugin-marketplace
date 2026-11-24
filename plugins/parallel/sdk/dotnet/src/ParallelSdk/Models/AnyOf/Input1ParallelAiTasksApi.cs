using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Input to the run; included only if requested.
/// </summary>
[JsonConverter(typeof(Input1ParallelAiTasksApiConverter))]
public record Input1ParallelAiTasksApi
{
    private readonly Optional<TaskRunInput> _taskRunInputValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Input1ParallelAiTasksApi(Optional<TaskRunInput> taskRunInputValue, Optional<UnknownArm> unknownValue)
    {
        _taskRunInputValue = taskRunInputValue;
        _unknownValue = unknownValue;
    }

    public static Input1ParallelAiTasksApi TaskRunInput(TaskRunInput value) =>
        new(Optional<TaskRunInput>.Some(value), default);

    internal static Input1ParallelAiTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskRunInput([NotNullWhen(true)] out TaskRunInput? value) =>
        _taskRunInputValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Input1ParallelAiTasksApi(TaskRunInput value) => TaskRunInput(value);

    public TResult Match<TResult>(Func<TaskRunInput, TResult> onTaskRunInput, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskRunInput(out var taskRunInputValue) => onTaskRunInput(taskRunInputValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Input1ParallelAiTasksApi)} holds no value.")
        };

    public void Match(Action<TaskRunInput> onTaskRunInput, Action<JsonElement> otherwise)
    {
        if (TryGetTaskRunInput(out var taskRunInputValue)) onTaskRunInput(taskRunInputValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Input1ParallelAiTasksApi)} holds no value.");
    }
}

file sealed class Input1ParallelAiTasksApiConverter : JsonConverter<Input1ParallelAiTasksApi>
{
    public override Input1ParallelAiTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TaskRunInput>(root, options, out var taskRunInputValue))
        {
            return Input1ParallelAiTasksApi.TaskRunInput(taskRunInputValue);
        }
        return Input1ParallelAiTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Input1ParallelAiTasksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetTaskRunInput(out var taskRunInputValue))
        {
            JsonSerializer.Serialize(writer, taskRunInputValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Input1ParallelAiTasksApi)} contains no valid value to serialize.");
        }
    }
}
