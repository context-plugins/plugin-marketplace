using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ScenarioConverter))]
public record Scenario
{
    private readonly Optional<TaskScenarioBrief> _taskScenarioBriefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Scenario(Optional<TaskScenarioBrief> taskScenarioBriefValue, Optional<UnknownArm> unknownValue)
    {
        _taskScenarioBriefValue = taskScenarioBriefValue;
        _unknownValue = unknownValue;
    }

    public static Scenario TaskScenarioBrief(TaskScenarioBrief value) =>
        new(Optional<TaskScenarioBrief>.Some(value), default);

    internal static Scenario Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskScenarioBrief([NotNullWhen(true)] out TaskScenarioBrief? value) =>
        _taskScenarioBriefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Scenario(TaskScenarioBrief value) => TaskScenarioBrief(value);

    public TResult Match<TResult>(Func<TaskScenarioBrief, TResult> onTaskScenarioBrief,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskScenarioBrief(out var taskScenarioBriefValue) => onTaskScenarioBrief(
                taskScenarioBriefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Scenario)} holds no value.")
        };

    public void Match(Action<TaskScenarioBrief> onTaskScenarioBrief, Action<JsonElement> otherwise)
    {
        if (TryGetTaskScenarioBrief(out var taskScenarioBriefValue)) onTaskScenarioBrief(taskScenarioBriefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Scenario)} holds no value.");
    }
}

file sealed class ScenarioConverter : JsonConverter<Scenario>
{
    public override Scenario Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TaskScenarioBrief>(root, options, out var taskScenarioBriefValue))
        {
            return Scenario.TaskScenarioBrief(taskScenarioBriefValue);
        }
        return Scenario.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Scenario value, JsonSerializerOptions options)
    {
        if (value.TryGetTaskScenarioBrief(out var taskScenarioBriefValue))
        {
            JsonSerializer.Serialize(writer, taskScenarioBriefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Scenario)} contains no valid value to serialize.");
        }
    }
}
