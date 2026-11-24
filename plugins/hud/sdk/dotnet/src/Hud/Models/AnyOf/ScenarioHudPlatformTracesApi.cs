using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ScenarioHudPlatformTracesApiConverter))]
public record ScenarioHudPlatformTracesApi
{
    private readonly Optional<TraceScenarioRef> _traceScenarioRefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ScenarioHudPlatformTracesApi(Optional<TraceScenarioRef> traceScenarioRefValue,
        Optional<UnknownArm> unknownValue)
    {
        _traceScenarioRefValue = traceScenarioRefValue;
        _unknownValue = unknownValue;
    }

    public static ScenarioHudPlatformTracesApi TraceScenarioRef(TraceScenarioRef value) =>
        new(Optional<TraceScenarioRef>.Some(value), default);

    internal static ScenarioHudPlatformTracesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTraceScenarioRef([NotNullWhen(true)] out TraceScenarioRef? value) =>
        _traceScenarioRefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ScenarioHudPlatformTracesApi(TraceScenarioRef value) => TraceScenarioRef(value);

    public TResult Match<TResult>(Func<TraceScenarioRef, TResult> onTraceScenarioRef,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTraceScenarioRef(out var traceScenarioRefValue) => onTraceScenarioRef(traceScenarioRefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ScenarioHudPlatformTracesApi)} holds no value.")
        };

    public void Match(Action<TraceScenarioRef> onTraceScenarioRef, Action<JsonElement> otherwise)
    {
        if (TryGetTraceScenarioRef(out var traceScenarioRefValue)) onTraceScenarioRef(traceScenarioRefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ScenarioHudPlatformTracesApi)} holds no value.");
    }
}

file sealed class ScenarioHudPlatformTracesApiConverter : JsonConverter<ScenarioHudPlatformTracesApi>
{
    public override ScenarioHudPlatformTracesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TraceScenarioRef>(root, options, out var traceScenarioRefValue))
        {
            return ScenarioHudPlatformTracesApi.TraceScenarioRef(traceScenarioRefValue);
        }
        return ScenarioHudPlatformTracesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ScenarioHudPlatformTracesApi value, JsonSerializerOptions options)
    {
        if (value.TryGetTraceScenarioRef(out var traceScenarioRefValue))
        {
            JsonSerializer.Serialize(writer, traceScenarioRefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ScenarioHudPlatformTracesApi)} contains no valid value to serialize.");
        }
    }
}
