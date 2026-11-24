using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.OneOf;

[JsonConverter(typeof(Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetConverter))]
public record Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet
{
    private readonly Optional<TaskRunProgressStatsEvent> _taskRunProgressStatsEventValue;

    private readonly Optional<TaskRunProgressMessageEvent> _taskRunProgressMessageEventValue;

    private readonly Optional<TaskRunEvent> _taskRunEventValue;

    private readonly Optional<ErrorEvent> _errorEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet(Optional<TaskRunProgressStatsEvent> taskRunProgressStatsEventValue,
        Optional<TaskRunProgressMessageEvent> taskRunProgressMessageEventValue,
        Optional<TaskRunEvent> taskRunEventValue,
        Optional<ErrorEvent> errorEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _taskRunProgressStatsEventValue = taskRunProgressStatsEventValue;
        _taskRunProgressMessageEventValue = taskRunProgressMessageEventValue;
        _taskRunEventValue = taskRunEventValue;
        _errorEventValue = errorEventValue;
        _unknownValue = unknownValue;
    }

    public static Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet TaskRunProgressStatsEvent(TaskRunProgressStatsEvent value) =>
        new(Optional<TaskRunProgressStatsEvent>.Some(value), default, default, default, default);

    public static Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet TaskRunProgressMessageEvent(TaskRunProgressMessageEvent value) =>
        new(default, Optional<TaskRunProgressMessageEvent>.Some(value), default, default, default);

    public static Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet TaskRunEvent(TaskRunEvent value) =>
        new(default, default, Optional<TaskRunEvent>.Some(value), default, default);

    public static Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet ErrorEvent(ErrorEvent value) =>
        new(default, default, default, Optional<ErrorEvent>.Some(value), default);

    internal static Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskRunProgressStatsEvent([NotNullWhen(true)] out TaskRunProgressStatsEvent? value) =>
        _taskRunProgressStatsEventValue.TryGetValue(out value);

    public bool TryGetTaskRunProgressMessageEvent([NotNullWhen(true)] out TaskRunProgressMessageEvent? value) =>
        _taskRunProgressMessageEventValue.TryGetValue(out value);

    public bool TryGetTaskRunEvent([NotNullWhen(true)] out TaskRunEvent? value) =>
        _taskRunEventValue.TryGetValue(out value);

    public bool TryGetErrorEvent([NotNullWhen(true)] out ErrorEvent? value) => _errorEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet(TaskRunProgressStatsEvent value) =>
        TaskRunProgressStatsEvent(value);

    public static implicit operator Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet(TaskRunProgressMessageEvent value) =>
        TaskRunProgressMessageEvent(value);

    public static implicit operator Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet(TaskRunEvent value) =>
        TaskRunEvent(value);

    public static implicit operator Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet(ErrorEvent value) =>
        ErrorEvent(value);

    public TResult Match<TResult>(Func<TaskRunProgressStatsEvent, TResult> onTaskRunProgressStatsEvent,
        Func<TaskRunProgressMessageEvent, TResult> onTaskRunProgressMessageEvent,
        Func<TaskRunEvent, TResult> onTaskRunEvent,
        Func<ErrorEvent, TResult> onErrorEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskRunProgressStatsEvent(
                out var taskRunProgressStatsEventValue) => onTaskRunProgressStatsEvent(taskRunProgressStatsEventValue),
            _ when TryGetTaskRunProgressMessageEvent(
                out var taskRunProgressMessageEventValue) => onTaskRunProgressMessageEvent(
                taskRunProgressMessageEventValue),
            _ when TryGetTaskRunEvent(out var taskRunEventValue) => onTaskRunEvent(taskRunEventValue),
            _ when TryGetErrorEvent(out var errorEventValue) => onErrorEvent(errorEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet)} holds no value.")
        };

    public void Match(Action<TaskRunProgressStatsEvent> onTaskRunProgressStatsEvent,
        Action<TaskRunProgressMessageEvent> onTaskRunProgressMessageEvent,
        Action<TaskRunEvent> onTaskRunEvent,
        Action<ErrorEvent> onErrorEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetTaskRunProgressStatsEvent(out var taskRunProgressStatsEventValue)) onTaskRunProgressStatsEvent(
            taskRunProgressStatsEventValue);
        else if (TryGetTaskRunProgressMessageEvent(
            out var taskRunProgressMessageEventValue)) onTaskRunProgressMessageEvent(taskRunProgressMessageEventValue);
        else if (TryGetTaskRunEvent(out var taskRunEventValue)) onTaskRunEvent(taskRunEventValue);
        else if (TryGetErrorEvent(out var errorEventValue)) onErrorEvent(errorEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet)} holds no value.");
    }
}

file sealed class Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetConverter : JsonConverter<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>
{
    public override Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "task_run.progress_stats" => Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet.TaskRunProgressStatsEvent(
                root.Deserialize<TaskRunProgressStatsEvent>(options)!),
            "task_run.progress_msg.plan" or "task_run.progress_msg.search" or "task_run.progress_msg.result" or
                "task_run.progress_msg.tool_call" or
                "task_run.progress_msg.exec_status" => Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet.TaskRunProgressMessageEvent(
                root.Deserialize<TaskRunProgressMessageEvent>(options)!),
            "task_run.state" => Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet.TaskRunEvent(
                root.Deserialize<TaskRunEvent>(options)!),
            "error" => Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet.ErrorEvent(root.Deserialize<ErrorEvent>(
                options)!),
            _ => Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer,
        Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet value,
        JsonSerializerOptions options)
    {
        if (value.TryGetTaskRunProgressStatsEvent(out var taskRunProgressStatsEventValue))
        {
            JsonSerializer.Serialize(writer, taskRunProgressStatsEventValue, options);
        }
        else if (value.TryGetTaskRunProgressMessageEvent(out var taskRunProgressMessageEventValue))
        {
            JsonSerializer.Serialize(writer, taskRunProgressMessageEventValue, options);
        }
        else if (value.TryGetTaskRunEvent(out var taskRunEventValue))
        {
            JsonSerializer.Serialize(writer, taskRunEventValue, options);
        }
        else if (value.TryGetErrorEvent(out var errorEventValue))
        {
            JsonSerializer.Serialize(writer, errorEventValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet)} contains no valid value to serialize.");
        }
    }
}
