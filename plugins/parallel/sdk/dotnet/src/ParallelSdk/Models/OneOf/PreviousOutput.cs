using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.OneOf;

/// <summary>
/// The full output from the prior run, including all fields and basis.
/// </summary>
[JsonConverter(typeof(PreviousOutputConverter))]
public record PreviousOutput
{
    private readonly Optional<TaskRunJsonOutput> _taskRunJsonOutputValue;

    private readonly Optional<TaskRunTextOutput> _taskRunTextOutputValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PreviousOutput(Optional<TaskRunJsonOutput> taskRunJsonOutputValue,
        Optional<TaskRunTextOutput> taskRunTextOutputValue,
        Optional<UnknownArm> unknownValue)
    {
        _taskRunJsonOutputValue = taskRunJsonOutputValue;
        _taskRunTextOutputValue = taskRunTextOutputValue;
        _unknownValue = unknownValue;
    }

    public static PreviousOutput TaskRunJsonOutput(TaskRunJsonOutput value) =>
        new(Optional<TaskRunJsonOutput>.Some(value), default, default);

    public static PreviousOutput TaskRunTextOutput(TaskRunTextOutput value) =>
        new(default, Optional<TaskRunTextOutput>.Some(value), default);

    internal static PreviousOutput Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskRunJsonOutput([NotNullWhen(true)] out TaskRunJsonOutput? value) =>
        _taskRunJsonOutputValue.TryGetValue(out value);

    public bool TryGetTaskRunTextOutput([NotNullWhen(true)] out TaskRunTextOutput? value) =>
        _taskRunTextOutputValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PreviousOutput(TaskRunJsonOutput value) => TaskRunJsonOutput(value);

    public static implicit operator PreviousOutput(TaskRunTextOutput value) => TaskRunTextOutput(value);

    public TResult Match<TResult>(Func<TaskRunJsonOutput, TResult> onTaskRunJsonOutput,
        Func<TaskRunTextOutput, TResult> onTaskRunTextOutput,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskRunJsonOutput(out var taskRunJsonOutputValue) => onTaskRunJsonOutput(
                taskRunJsonOutputValue),
            _ when TryGetTaskRunTextOutput(out var taskRunTextOutputValue) => onTaskRunTextOutput(
                taskRunTextOutputValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PreviousOutput)} holds no value.")
        };

    public void Match(Action<TaskRunJsonOutput> onTaskRunJsonOutput,
        Action<TaskRunTextOutput> onTaskRunTextOutput,
        Action<JsonElement> otherwise)
    {
        if (TryGetTaskRunJsonOutput(out var taskRunJsonOutputValue)) onTaskRunJsonOutput(taskRunJsonOutputValue);
        else if (TryGetTaskRunTextOutput(out var taskRunTextOutputValue)) onTaskRunTextOutput(taskRunTextOutputValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PreviousOutput)} holds no value.");
    }
}

file sealed class PreviousOutputConverter : JsonConverter<PreviousOutput>
{
    public override PreviousOutput Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "json" => PreviousOutput.TaskRunJsonOutput(root.Deserialize<TaskRunJsonOutput>(options)!),
            "text" => PreviousOutput.TaskRunTextOutput(root.Deserialize<TaskRunTextOutput>(options)!),
            _ => PreviousOutput.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, PreviousOutput value, JsonSerializerOptions options)
    {
        if (value.TryGetTaskRunJsonOutput(out var taskRunJsonOutputValue))
        {
            JsonSerializer.Serialize(writer, taskRunJsonOutputValue, options);
        }
        else if (value.TryGetTaskRunTextOutput(out var taskRunTextOutputValue))
        {
            JsonSerializer.Serialize(writer, taskRunTextOutputValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PreviousOutput)} contains no valid value to serialize.");
        }
    }
}
