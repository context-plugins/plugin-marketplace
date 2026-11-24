using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Advanced search configuration for the task run.
/// </summary>
[JsonConverter(typeof(AdvancedSettingsParallelAiTasksApiConverter))]
public record AdvancedSettingsParallelAiTasksApi
{
    private readonly Optional<TaskAdvancedSettings> _taskAdvancedSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AdvancedSettingsParallelAiTasksApi(Optional<TaskAdvancedSettings> taskAdvancedSettingsValue,
        Optional<UnknownArm> unknownValue)
    {
        _taskAdvancedSettingsValue = taskAdvancedSettingsValue;
        _unknownValue = unknownValue;
    }

    public static AdvancedSettingsParallelAiTasksApi TaskAdvancedSettings(TaskAdvancedSettings value) =>
        new(Optional<TaskAdvancedSettings>.Some(value), default);

    internal static AdvancedSettingsParallelAiTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskAdvancedSettings([NotNullWhen(true)] out TaskAdvancedSettings? value) =>
        _taskAdvancedSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AdvancedSettingsParallelAiTasksApi(TaskAdvancedSettings value) =>
        TaskAdvancedSettings(value);

    public TResult Match<TResult>(Func<TaskAdvancedSettings, TResult> onTaskAdvancedSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskAdvancedSettings(out var taskAdvancedSettingsValue) => onTaskAdvancedSettings(
                taskAdvancedSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AdvancedSettingsParallelAiTasksApi)} holds no value.")
        };

    public void Match(Action<TaskAdvancedSettings> onTaskAdvancedSettings, Action<JsonElement> otherwise)
    {
        if (TryGetTaskAdvancedSettings(out var taskAdvancedSettingsValue)) onTaskAdvancedSettings(
            taskAdvancedSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AdvancedSettingsParallelAiTasksApi)} holds no value.");
    }
}

file sealed class AdvancedSettingsParallelAiTasksApiConverter : JsonConverter<AdvancedSettingsParallelAiTasksApi>
{
    public override AdvancedSettingsParallelAiTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TaskAdvancedSettings>(root, options, out var taskAdvancedSettingsValue))
        {
            return AdvancedSettingsParallelAiTasksApi.TaskAdvancedSettings(taskAdvancedSettingsValue);
        }
        return AdvancedSettingsParallelAiTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        AdvancedSettingsParallelAiTasksApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetTaskAdvancedSettings(out var taskAdvancedSettingsValue))
        {
            JsonSerializer.Serialize(writer, taskAdvancedSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(AdvancedSettingsParallelAiTasksApi)} contains no valid value to serialize.");
        }
    }
}
