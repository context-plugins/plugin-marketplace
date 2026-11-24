using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.OneOf;

[JsonConverter(typeof(Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetConverter))]
public record Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet
{
    private readonly Optional<TaskGroupStatusEvent> _taskGroupStatusEventValue;

    private readonly Optional<TaskRunEvent> _taskRunEventValue;

    private readonly Optional<ErrorEvent> _errorEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(Optional<TaskGroupStatusEvent> taskGroupStatusEventValue,
        Optional<TaskRunEvent> taskRunEventValue,
        Optional<ErrorEvent> errorEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _taskGroupStatusEventValue = taskGroupStatusEventValue;
        _taskRunEventValue = taskRunEventValue;
        _errorEventValue = errorEventValue;
        _unknownValue = unknownValue;
    }

    public static Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet TaskGroupStatusEvent(TaskGroupStatusEvent value) =>
        new(Optional<TaskGroupStatusEvent>.Some(value), default, default, default);

    public static Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet TaskRunEvent(TaskRunEvent value) =>
        new(default, Optional<TaskRunEvent>.Some(value), default, default);

    public static Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet ErrorEvent(ErrorEvent value) =>
        new(default, default, Optional<ErrorEvent>.Some(value), default);

    internal static Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskGroupStatusEvent([NotNullWhen(true)] out TaskGroupStatusEvent? value) =>
        _taskGroupStatusEventValue.TryGetValue(out value);

    public bool TryGetTaskRunEvent([NotNullWhen(true)] out TaskRunEvent? value) =>
        _taskRunEventValue.TryGetValue(out value);

    public bool TryGetErrorEvent([NotNullWhen(true)] out ErrorEvent? value) => _errorEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(TaskGroupStatusEvent value) =>
        TaskGroupStatusEvent(value);

    public static implicit operator Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(TaskRunEvent value) =>
        TaskRunEvent(value);

    public static implicit operator Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(ErrorEvent value) =>
        ErrorEvent(value);

    public TResult Match<TResult>(Func<TaskGroupStatusEvent, TResult> onTaskGroupStatusEvent,
        Func<TaskRunEvent, TResult> onTaskRunEvent,
        Func<ErrorEvent, TResult> onErrorEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskGroupStatusEvent(out var taskGroupStatusEventValue) => onTaskGroupStatusEvent(
                taskGroupStatusEventValue),
            _ when TryGetTaskRunEvent(out var taskRunEventValue) => onTaskRunEvent(taskRunEventValue),
            _ when TryGetErrorEvent(out var errorEventValue) => onErrorEvent(errorEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet)} holds no value.")
        };

    public void Match(Action<TaskGroupStatusEvent> onTaskGroupStatusEvent,
        Action<TaskRunEvent> onTaskRunEvent,
        Action<ErrorEvent> onErrorEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetTaskGroupStatusEvent(out var taskGroupStatusEventValue)) onTaskGroupStatusEvent(
            taskGroupStatusEventValue);
        else if (TryGetTaskRunEvent(out var taskRunEventValue)) onTaskRunEvent(taskRunEventValue);
        else if (TryGetErrorEvent(out var errorEventValue)) onErrorEvent(errorEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet)} holds no value.");
    }
}

file sealed class Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetConverter : JsonConverter<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>
{
    public override Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet Read(ref Utf8JsonReader reader,
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
            "task_group_status" => Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet.TaskGroupStatusEvent(
                root.Deserialize<TaskGroupStatusEvent>(options)!),
            "task_run.state" => Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet.TaskRunEvent(
                root.Deserialize<TaskRunEvent>(options)!),
            "error" => Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet.ErrorEvent(
                root.Deserialize<ErrorEvent>(options)!),
            _ => Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer,
        Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet value,
        JsonSerializerOptions options)
    {
        if (value.TryGetTaskGroupStatusEvent(out var taskGroupStatusEventValue))
        {
            JsonSerializer.Serialize(writer, taskGroupStatusEventValue, options);
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
                $"{nameof(Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet)} contains no valid value to serialize.");
        }
    }
}
