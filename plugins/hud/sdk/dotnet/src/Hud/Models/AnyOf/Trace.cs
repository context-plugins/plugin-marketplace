using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(TraceConverter))]
public record Trace
{
    private readonly Optional<ActiveInstanceTrace> _activeInstanceTraceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Trace(Optional<ActiveInstanceTrace> activeInstanceTraceValue, Optional<UnknownArm> unknownValue)
    {
        _activeInstanceTraceValue = activeInstanceTraceValue;
        _unknownValue = unknownValue;
    }

    public static Trace ActiveInstanceTrace(ActiveInstanceTrace value) =>
        new(Optional<ActiveInstanceTrace>.Some(value), default);

    internal static Trace Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetActiveInstanceTrace([NotNullWhen(true)] out ActiveInstanceTrace? value) =>
        _activeInstanceTraceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Trace(ActiveInstanceTrace value) => ActiveInstanceTrace(value);

    public TResult Match<TResult>(Func<ActiveInstanceTrace, TResult> onActiveInstanceTrace,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetActiveInstanceTrace(out var activeInstanceTraceValue) => onActiveInstanceTrace(
                activeInstanceTraceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Trace)} holds no value.")
        };

    public void Match(Action<ActiveInstanceTrace> onActiveInstanceTrace, Action<JsonElement> otherwise)
    {
        if (TryGetActiveInstanceTrace(out var activeInstanceTraceValue)) onActiveInstanceTrace(
            activeInstanceTraceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Trace)} holds no value.");
    }
}

file sealed class TraceConverter : JsonConverter<Trace>
{
    public override Trace Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ActiveInstanceTrace>(root, options, out var activeInstanceTraceValue))
        {
            return Trace.ActiveInstanceTrace(activeInstanceTraceValue);
        }
        return Trace.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Trace value, JsonSerializerOptions options)
    {
        if (value.TryGetActiveInstanceTrace(out var activeInstanceTraceValue))
        {
            JsonSerializer.Serialize(writer, activeInstanceTraceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Trace)} contains no valid value to serialize.");
        }
    }
}
