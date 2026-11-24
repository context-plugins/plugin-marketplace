using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.OneOf;

[JsonConverter(typeof(ResultConverter))]
public record Result
{
    private readonly Optional<FindAllMemoryResult> _findAllMemoryResultValue;

    private readonly Optional<MonitorMemoryResult> _monitorMemoryResultValue;

    private readonly Optional<TaskMemoryResult> _taskMemoryResultValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Result(Optional<FindAllMemoryResult> findAllMemoryResultValue,
        Optional<MonitorMemoryResult> monitorMemoryResultValue,
        Optional<TaskMemoryResult> taskMemoryResultValue,
        Optional<UnknownArm> unknownValue)
    {
        _findAllMemoryResultValue = findAllMemoryResultValue;
        _monitorMemoryResultValue = monitorMemoryResultValue;
        _taskMemoryResultValue = taskMemoryResultValue;
        _unknownValue = unknownValue;
    }

    public static Result FindAllMemoryResult(FindAllMemoryResult value) =>
        new(Optional<FindAllMemoryResult>.Some(value), default, default, default);

    public static Result MonitorMemoryResult(MonitorMemoryResult value) =>
        new(default, Optional<MonitorMemoryResult>.Some(value), default, default);

    public static Result TaskMemoryResult(TaskMemoryResult value) =>
        new(default, default, Optional<TaskMemoryResult>.Some(value), default);

    internal static Result Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFindAllMemoryResult([NotNullWhen(true)] out FindAllMemoryResult? value) =>
        _findAllMemoryResultValue.TryGetValue(out value);

    public bool TryGetMonitorMemoryResult([NotNullWhen(true)] out MonitorMemoryResult? value) =>
        _monitorMemoryResultValue.TryGetValue(out value);

    public bool TryGetTaskMemoryResult([NotNullWhen(true)] out TaskMemoryResult? value) =>
        _taskMemoryResultValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Result(FindAllMemoryResult value) => FindAllMemoryResult(value);

    public static implicit operator Result(MonitorMemoryResult value) => MonitorMemoryResult(value);

    public static implicit operator Result(TaskMemoryResult value) => TaskMemoryResult(value);

    public TResult Match<TResult>(Func<FindAllMemoryResult, TResult> onFindAllMemoryResult,
        Func<MonitorMemoryResult, TResult> onMonitorMemoryResult,
        Func<TaskMemoryResult, TResult> onTaskMemoryResult,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFindAllMemoryResult(out var findAllMemoryResultValue) => onFindAllMemoryResult(
                findAllMemoryResultValue),
            _ when TryGetMonitorMemoryResult(out var monitorMemoryResultValue) => onMonitorMemoryResult(
                monitorMemoryResultValue),
            _ when TryGetTaskMemoryResult(out var taskMemoryResultValue) => onTaskMemoryResult(taskMemoryResultValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Result)} holds no value.")
        };

    public void Match(Action<FindAllMemoryResult> onFindAllMemoryResult,
        Action<MonitorMemoryResult> onMonitorMemoryResult,
        Action<TaskMemoryResult> onTaskMemoryResult,
        Action<JsonElement> otherwise)
    {
        if (TryGetFindAllMemoryResult(out var findAllMemoryResultValue)) onFindAllMemoryResult(
            findAllMemoryResultValue);
        else if (TryGetMonitorMemoryResult(out var monitorMemoryResultValue)) onMonitorMemoryResult(
            monitorMemoryResultValue);
        else if (TryGetTaskMemoryResult(out var taskMemoryResultValue)) onTaskMemoryResult(taskMemoryResultValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Result)} holds no value.");
    }
}

file sealed class ResultConverter : JsonConverter<Result>
{
    public override Result Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("kind", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'kind' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "findall" => Result.FindAllMemoryResult(root.Deserialize<FindAllMemoryResult>(options)!),
            "monitor" => Result.MonitorMemoryResult(root.Deserialize<MonitorMemoryResult>(options)!),
            "task" => Result.TaskMemoryResult(root.Deserialize<TaskMemoryResult>(options)!),
            _ => Result.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, Result value, JsonSerializerOptions options)
    {
        if (value.TryGetFindAllMemoryResult(out var findAllMemoryResultValue))
        {
            JsonSerializer.Serialize(writer, findAllMemoryResultValue, options);
        }
        else if (value.TryGetMonitorMemoryResult(out var monitorMemoryResultValue))
        {
            JsonSerializer.Serialize(writer, monitorMemoryResultValue, options);
        }
        else if (value.TryGetTaskMemoryResult(out var taskMemoryResultValue))
        {
            JsonSerializer.Serialize(writer, taskMemoryResultValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Result)} contains no valid value to serialize.");
        }
    }
}
