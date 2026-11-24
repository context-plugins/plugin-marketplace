using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(BriefConverter))]
public record Brief
{
    private readonly Optional<TaskBrief> _taskBriefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Brief(Optional<TaskBrief> taskBriefValue, Optional<UnknownArm> unknownValue)
    {
        _taskBriefValue = taskBriefValue;
        _unknownValue = unknownValue;
    }

    public static Brief TaskBrief(TaskBrief value) => new(Optional<TaskBrief>.Some(value), default);

    internal static Brief Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTaskBrief([NotNullWhen(true)] out TaskBrief? value) => _taskBriefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Brief(TaskBrief value) => TaskBrief(value);

    public TResult Match<TResult>(Func<TaskBrief, TResult> onTaskBrief, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTaskBrief(out var taskBriefValue) => onTaskBrief(taskBriefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Brief)} holds no value.")
        };

    public void Match(Action<TaskBrief> onTaskBrief, Action<JsonElement> otherwise)
    {
        if (TryGetTaskBrief(out var taskBriefValue)) onTaskBrief(taskBriefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Brief)} holds no value.");
    }
}

file sealed class BriefConverter : JsonConverter<Brief>
{
    public override Brief Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TaskBrief>(root, options, out var taskBriefValue))
        {
            return Brief.TaskBrief(taskBriefValue);
        }
        return Brief.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Brief value, JsonSerializerOptions options)
    {
        if (value.TryGetTaskBrief(out var taskBriefValue))
        {
            JsonSerializer.Serialize(writer, taskBriefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Brief)} contains no valid value to serialize.");
        }
    }
}
