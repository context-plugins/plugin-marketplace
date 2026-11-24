using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Apibara.Core.Extensions;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models.AnyOf;

[JsonConverter(typeof(RunCond1Converter))]
public record RunCond1
{
    private readonly Optional<RunCond> _runCondValue;

    private readonly Optional<IReadOnlyList<RunCond>> _listOfRunCondValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private RunCond1(Optional<RunCond> runCondValue,
        Optional<IReadOnlyList<RunCond>> listOfRunCondValue,
        Optional<UnknownArm> unknownValue)
    {
        _runCondValue = runCondValue;
        _listOfRunCondValue = listOfRunCondValue;
        _unknownValue = unknownValue;
    }

    public static RunCond1 RunCond(RunCond value) => new(Optional<RunCond>.Some(value), default, default);

    public static RunCond1 ListOfRunCond(IReadOnlyList<RunCond> value) =>
        new(default, Optional<IReadOnlyList<RunCond>>.Some(value), default);

    internal static RunCond1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRunCond([NotNullWhen(true)] out RunCond? value) => _runCondValue.TryGetValue(out value);

    public bool TryGetListOfRunCond([NotNullWhen(true)] out IReadOnlyList<RunCond>? value) =>
        _listOfRunCondValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator RunCond1(RunCond value) => RunCond(value);

    public TResult Match<TResult>(Func<RunCond, TResult> onRunCond,
        Func<IReadOnlyList<RunCond>, TResult> onListOfRunCond,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRunCond(out var runCondValue) => onRunCond(runCondValue),
            _ when TryGetListOfRunCond(out var listOfRunCondValue) => onListOfRunCond(listOfRunCondValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(RunCond1)} holds no value.")
        };

    public void Match(Action<RunCond> onRunCond,
        Action<IReadOnlyList<RunCond>> onListOfRunCond,
        Action<JsonElement> otherwise)
    {
        if (TryGetRunCond(out var runCondValue)) onRunCond(runCondValue);
        else if (TryGetListOfRunCond(out var listOfRunCondValue)) onListOfRunCond(listOfRunCondValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(RunCond1)} holds no value.");
    }
}

file sealed class RunCond1Converter : JsonConverter<RunCond1>
{
    public override RunCond1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RunCond>(root, options, out var runCondValue))
        {
            return RunCond1.RunCond(runCondValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<RunCond>>(root, options, out var listOfRunCondValue))
        {
            return RunCond1.ListOfRunCond(listOfRunCondValue);
        }
        return RunCond1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, RunCond1 value, JsonSerializerOptions options)
    {
        if (value.TryGetRunCond(out var runCondValue))
        {
            JsonSerializer.Serialize(writer, runCondValue, options);
        }
        else if (value.TryGetListOfRunCond(out var listOfRunCondValue))
        {
            JsonSerializer.Serialize(writer, listOfRunCondValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(RunCond1)} contains no valid value to serialize.");
        }
    }
}
