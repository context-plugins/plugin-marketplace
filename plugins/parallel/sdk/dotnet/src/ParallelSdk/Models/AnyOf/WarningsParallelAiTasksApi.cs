using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Warnings for the run, if any.
/// </summary>
[JsonConverter(typeof(WarningsParallelAiTasksApiConverter))]
public record WarningsParallelAiTasksApi
{
    private readonly Optional<IReadOnlyList<WarningParallelAiTasksApi>> _listOfWarningParallelAiTasksApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private WarningsParallelAiTasksApi(Optional<IReadOnlyList<WarningParallelAiTasksApi>> listOfWarningParallelAiTasksApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfWarningParallelAiTasksApiValue = listOfWarningParallelAiTasksApiValue;
        _unknownValue = unknownValue;
    }

    public static WarningsParallelAiTasksApi ListOfWarningParallelAiTasksApi(IReadOnlyList<WarningParallelAiTasksApi> value) =>
        new(Optional<IReadOnlyList<WarningParallelAiTasksApi>>.Some(value), default);

    internal static WarningsParallelAiTasksApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfWarningParallelAiTasksApi([NotNullWhen(true)] out IReadOnlyList<WarningParallelAiTasksApi>? value) =>
        _listOfWarningParallelAiTasksApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<WarningParallelAiTasksApi>, TResult> onListOfWarningParallelAiTasksApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfWarningParallelAiTasksApi(
                out var listOfWarningParallelAiTasksApiValue) => onListOfWarningParallelAiTasksApi(
                listOfWarningParallelAiTasksApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(WarningsParallelAiTasksApi)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<WarningParallelAiTasksApi>> onListOfWarningParallelAiTasksApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfWarningParallelAiTasksApi(
            out var listOfWarningParallelAiTasksApiValue)) onListOfWarningParallelAiTasksApi(
            listOfWarningParallelAiTasksApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(WarningsParallelAiTasksApi)} holds no value.");
    }
}

file sealed class WarningsParallelAiTasksApiConverter : JsonConverter<WarningsParallelAiTasksApi>
{
    public override WarningsParallelAiTasksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<WarningParallelAiTasksApi>>(
            root,
            options,
            out var listOfWarningParallelAiTasksApiValue))
        {
            return WarningsParallelAiTasksApi.ListOfWarningParallelAiTasksApi(listOfWarningParallelAiTasksApiValue);
        }
        return WarningsParallelAiTasksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, WarningsParallelAiTasksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfWarningParallelAiTasksApi(out var listOfWarningParallelAiTasksApiValue))
        {
            JsonSerializer.Serialize(writer, listOfWarningParallelAiTasksApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(WarningsParallelAiTasksApi)} contains no valid value to serialize.");
        }
    }
}
