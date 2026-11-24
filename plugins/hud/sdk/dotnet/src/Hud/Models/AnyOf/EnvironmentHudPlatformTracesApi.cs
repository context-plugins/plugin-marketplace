using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(EnvironmentHudPlatformTracesApiConverter))]
public record EnvironmentHudPlatformTracesApi
{
    private readonly Optional<TraceEnvironmentRef> _traceEnvironmentRefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EnvironmentHudPlatformTracesApi(Optional<TraceEnvironmentRef> traceEnvironmentRefValue,
        Optional<UnknownArm> unknownValue)
    {
        _traceEnvironmentRefValue = traceEnvironmentRefValue;
        _unknownValue = unknownValue;
    }

    public static EnvironmentHudPlatformTracesApi TraceEnvironmentRef(TraceEnvironmentRef value) =>
        new(Optional<TraceEnvironmentRef>.Some(value), default);

    internal static EnvironmentHudPlatformTracesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTraceEnvironmentRef([NotNullWhen(true)] out TraceEnvironmentRef? value) =>
        _traceEnvironmentRefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EnvironmentHudPlatformTracesApi(TraceEnvironmentRef value) =>
        TraceEnvironmentRef(value);

    public TResult Match<TResult>(Func<TraceEnvironmentRef, TResult> onTraceEnvironmentRef,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTraceEnvironmentRef(out var traceEnvironmentRefValue) => onTraceEnvironmentRef(
                traceEnvironmentRefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EnvironmentHudPlatformTracesApi)} holds no value.")
        };

    public void Match(Action<TraceEnvironmentRef> onTraceEnvironmentRef, Action<JsonElement> otherwise)
    {
        if (TryGetTraceEnvironmentRef(out var traceEnvironmentRefValue)) onTraceEnvironmentRef(
            traceEnvironmentRefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EnvironmentHudPlatformTracesApi)} holds no value.");
    }
}

file sealed class EnvironmentHudPlatformTracesApiConverter : JsonConverter<EnvironmentHudPlatformTracesApi>
{
    public override EnvironmentHudPlatformTracesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TraceEnvironmentRef>(root, options, out var traceEnvironmentRefValue))
        {
            return EnvironmentHudPlatformTracesApi.TraceEnvironmentRef(traceEnvironmentRefValue);
        }
        return EnvironmentHudPlatformTracesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        EnvironmentHudPlatformTracesApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetTraceEnvironmentRef(out var traceEnvironmentRefValue))
        {
            JsonSerializer.Serialize(writer, traceEnvironmentRefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EnvironmentHudPlatformTracesApi)} contains no valid value to serialize.");
        }
    }
}
