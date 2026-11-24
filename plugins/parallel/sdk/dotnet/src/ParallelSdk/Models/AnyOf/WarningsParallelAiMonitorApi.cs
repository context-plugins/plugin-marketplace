using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Execution caveats for this page of events, e.g. compute limits.
/// </summary>
[JsonConverter(typeof(WarningsParallelAiMonitorApiConverter))]
public record WarningsParallelAiMonitorApi
{
    private readonly Optional<IReadOnlyList<WarningParallelAiMonitorApi>> _listOfWarningParallelAiMonitorApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private WarningsParallelAiMonitorApi(Optional<IReadOnlyList<WarningParallelAiMonitorApi>> listOfWarningParallelAiMonitorApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfWarningParallelAiMonitorApiValue = listOfWarningParallelAiMonitorApiValue;
        _unknownValue = unknownValue;
    }

    public static WarningsParallelAiMonitorApi ListOfWarningParallelAiMonitorApi(IReadOnlyList<WarningParallelAiMonitorApi> value) =>
        new(Optional<IReadOnlyList<WarningParallelAiMonitorApi>>.Some(value), default);

    internal static WarningsParallelAiMonitorApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfWarningParallelAiMonitorApi([NotNullWhen(true)] out IReadOnlyList<WarningParallelAiMonitorApi>? value) =>
        _listOfWarningParallelAiMonitorApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<WarningParallelAiMonitorApi>, TResult> onListOfWarningParallelAiMonitorApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfWarningParallelAiMonitorApi(
                out var listOfWarningParallelAiMonitorApiValue) => onListOfWarningParallelAiMonitorApi(
                listOfWarningParallelAiMonitorApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(WarningsParallelAiMonitorApi)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<WarningParallelAiMonitorApi>> onListOfWarningParallelAiMonitorApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfWarningParallelAiMonitorApi(
            out var listOfWarningParallelAiMonitorApiValue)) onListOfWarningParallelAiMonitorApi(
            listOfWarningParallelAiMonitorApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(WarningsParallelAiMonitorApi)} holds no value.");
    }
}

file sealed class WarningsParallelAiMonitorApiConverter : JsonConverter<WarningsParallelAiMonitorApi>
{
    public override WarningsParallelAiMonitorApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<WarningParallelAiMonitorApi>>(
            root,
            options,
            out var listOfWarningParallelAiMonitorApiValue))
        {
            return WarningsParallelAiMonitorApi.ListOfWarningParallelAiMonitorApi(
                listOfWarningParallelAiMonitorApiValue);
        }
        return WarningsParallelAiMonitorApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, WarningsParallelAiMonitorApi value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfWarningParallelAiMonitorApi(out var listOfWarningParallelAiMonitorApiValue))
        {
            JsonSerializer.Serialize(writer, listOfWarningParallelAiMonitorApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(WarningsParallelAiMonitorApi)} contains no valid value to serialize.");
        }
    }
}
