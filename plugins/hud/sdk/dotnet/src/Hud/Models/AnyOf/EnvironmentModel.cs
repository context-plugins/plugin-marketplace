using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(EnvironmentModelConverter))]
public record EnvironmentModel
{
    private readonly Optional<TaskEnvironmentBrief> _taskEnvironmentBriefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EnvironmentModel(Optional<TaskEnvironmentBrief> taskEnvironmentBriefValue,
        Optional<UnknownArm> unknownValue)
    {
        _taskEnvironmentBriefValue = taskEnvironmentBriefValue;
        _unknownValue = unknownValue;
    }

    public static EnvironmentModel TaskEnvironmentBrief(TaskEnvironmentBrief value) =>
        new(Optional<TaskEnvironmentBrief>.Some(value), default);

    internal static EnvironmentModel Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskEnvironmentBrief([NotNullWhen(true)] out TaskEnvironmentBrief? value) =>
        _taskEnvironmentBriefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EnvironmentModel(TaskEnvironmentBrief value) => TaskEnvironmentBrief(value);

    public TResult Match<TResult>(Func<TaskEnvironmentBrief, TResult> onTaskEnvironmentBrief,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskEnvironmentBrief(out var taskEnvironmentBriefValue) => onTaskEnvironmentBrief(
                taskEnvironmentBriefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EnvironmentModel)} holds no value.")
        };

    public void Match(Action<TaskEnvironmentBrief> onTaskEnvironmentBrief, Action<JsonElement> otherwise)
    {
        if (TryGetTaskEnvironmentBrief(out var taskEnvironmentBriefValue)) onTaskEnvironmentBrief(
            taskEnvironmentBriefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EnvironmentModel)} holds no value.");
    }
}

file sealed class EnvironmentModelConverter : JsonConverter<EnvironmentModel>
{
    public override EnvironmentModel Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TaskEnvironmentBrief>(root, options, out var taskEnvironmentBriefValue))
        {
            return EnvironmentModel.TaskEnvironmentBrief(taskEnvironmentBriefValue);
        }
        return EnvironmentModel.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EnvironmentModel value, JsonSerializerOptions options)
    {
        if (value.TryGetTaskEnvironmentBrief(out var taskEnvironmentBriefValue))
        {
            JsonSerializer.Serialize(writer, taskEnvironmentBriefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EnvironmentModel)} contains no valid value to serialize.");
        }
    }
}
