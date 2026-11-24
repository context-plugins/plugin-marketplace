using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(TaskModelConverter))]
public record TaskModel
{
    private readonly Optional<TraceTaskRef> _traceTaskRefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TaskModel(Optional<TraceTaskRef> traceTaskRefValue, Optional<UnknownArm> unknownValue)
    {
        _traceTaskRefValue = traceTaskRefValue;
        _unknownValue = unknownValue;
    }

    public static TaskModel TraceTaskRef(TraceTaskRef value) => new(Optional<TraceTaskRef>.Some(value), default);

    internal static TaskModel Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTraceTaskRef([NotNullWhen(true)] out TraceTaskRef? value) =>
        _traceTaskRefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TaskModel(TraceTaskRef value) => TraceTaskRef(value);

    public TResult Match<TResult>(Func<TraceTaskRef, TResult> onTraceTaskRef, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTraceTaskRef(out var traceTaskRefValue) => onTraceTaskRef(traceTaskRefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TaskModel)} holds no value.")
        };

    public void Match(Action<TraceTaskRef> onTraceTaskRef, Action<JsonElement> otherwise)
    {
        if (TryGetTraceTaskRef(out var traceTaskRefValue)) onTraceTaskRef(traceTaskRefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TaskModel)} holds no value.");
    }
}

file sealed class TaskModelConverter : JsonConverter<TaskModel>
{
    public override TaskModel Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TraceTaskRef>(root, options, out var traceTaskRefValue))
        {
            return TaskModel.TraceTaskRef(traceTaskRefValue);
        }
        return TaskModel.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TaskModel value, JsonSerializerOptions options)
    {
        if (value.TryGetTraceTaskRef(out var traceTaskRefValue))
        {
            JsonSerializer.Serialize(writer, traceTaskRefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TaskModel)} contains no valid value to serialize.");
        }
    }
}
