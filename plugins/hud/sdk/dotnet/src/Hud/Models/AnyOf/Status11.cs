using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

/// <summary>
/// Only traces in these statuses; the category counts cover the same traces.
/// </summary>
[JsonConverter(typeof(Status11Converter))]
public record Status11
{
    private readonly Optional<IReadOnlyList<TraceStatus>> _listOfTraceStatusValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Status11(Optional<IReadOnlyList<TraceStatus>> listOfTraceStatusValue, Optional<UnknownArm> unknownValue)
    {
        _listOfTraceStatusValue = listOfTraceStatusValue;
        _unknownValue = unknownValue;
    }

    public static Status11 ListOfTraceStatus(IReadOnlyList<TraceStatus> value) =>
        new(Optional<IReadOnlyList<TraceStatus>>.Some(value), default);

    internal static Status11 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfTraceStatus([NotNullWhen(true)] out IReadOnlyList<TraceStatus>? value) =>
        _listOfTraceStatusValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<TraceStatus>, TResult> onListOfTraceStatus,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfTraceStatus(out var listOfTraceStatusValue) => onListOfTraceStatus(
                listOfTraceStatusValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Status11)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<TraceStatus>> onListOfTraceStatus, Action<JsonElement> otherwise)
    {
        if (TryGetListOfTraceStatus(out var listOfTraceStatusValue)) onListOfTraceStatus(listOfTraceStatusValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Status11)} holds no value.");
    }
}

file sealed class Status11Converter : JsonConverter<Status11>
{
    public override Status11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<TraceStatus>>(root, options, out var listOfTraceStatusValue))
        {
            return Status11.ListOfTraceStatus(listOfTraceStatusValue);
        }
        return Status11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Status11 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfTraceStatus(out var listOfTraceStatusValue))
        {
            JsonSerializer.Serialize(writer, listOfTraceStatusValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Status11)} contains no valid value to serialize.");
        }
    }
}
