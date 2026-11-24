using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.OneOf;

[JsonConverter(typeof(Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetConverter))]
public record Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet
{
    private readonly Optional<TaskRunEvent> _taskRunEventValue;

    private readonly Optional<ErrorEvent> _errorEventValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(Optional<TaskRunEvent> taskRunEventValue,
        Optional<ErrorEvent> errorEventValue,
        Optional<UnknownArm> unknownValue)
    {
        _taskRunEventValue = taskRunEventValue;
        _errorEventValue = errorEventValue;
        _unknownValue = unknownValue;
    }

    public static Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet TaskRunEvent(TaskRunEvent value) =>
        new(Optional<TaskRunEvent>.Some(value), default, default);

    public static Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet ErrorEvent(ErrorEvent value) =>
        new(default, Optional<ErrorEvent>.Some(value), default);

    internal static Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskRunEvent([NotNullWhen(true)] out TaskRunEvent? value) =>
        _taskRunEventValue.TryGetValue(out value);

    public bool TryGetErrorEvent([NotNullWhen(true)] out ErrorEvent? value) => _errorEventValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(TaskRunEvent value) =>
        TaskRunEvent(value);

    public static implicit operator Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(ErrorEvent value) =>
        ErrorEvent(value);

    public TResult Match<TResult>(Func<TaskRunEvent, TResult> onTaskRunEvent,
        Func<ErrorEvent, TResult> onErrorEvent,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskRunEvent(out var taskRunEventValue) => onTaskRunEvent(taskRunEventValue),
            _ when TryGetErrorEvent(out var errorEventValue) => onErrorEvent(errorEventValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet)} holds no value.")
        };

    public void Match(Action<TaskRunEvent> onTaskRunEvent,
        Action<ErrorEvent> onErrorEvent,
        Action<JsonElement> otherwise)
    {
        if (TryGetTaskRunEvent(out var taskRunEventValue)) onTaskRunEvent(taskRunEventValue);
        else if (TryGetErrorEvent(out var errorEventValue)) onErrorEvent(errorEventValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet)} holds no value.");
    }
}

file sealed class Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetConverter : JsonConverter<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>
{
    public override Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet Read(ref Utf8JsonReader reader,
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
            "task_run.state" => Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet.TaskRunEvent(
                root.Deserialize<TaskRunEvent>(options)!),
            "error" => Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet.ErrorEvent(
                root.Deserialize<ErrorEvent>(options)!),
            _ => Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer,
        Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet value,
        JsonSerializerOptions options)
    {
        if (value.TryGetTaskRunEvent(out var taskRunEventValue))
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
                $"{nameof(Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet)} contains no valid value to serialize.");
        }
    }
}
