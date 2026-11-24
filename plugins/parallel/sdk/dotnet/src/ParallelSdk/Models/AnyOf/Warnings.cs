using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Warnings for the extract request, if any.
/// </summary>
[JsonConverter(typeof(WarningsConverter))]
public record Warnings
{
    private readonly Optional<IReadOnlyList<Warning>> _listOfWarningValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Warnings(Optional<IReadOnlyList<Warning>> listOfWarningValue, Optional<UnknownArm> unknownValue)
    {
        _listOfWarningValue = listOfWarningValue;
        _unknownValue = unknownValue;
    }

    public static Warnings ListOfWarning(IReadOnlyList<Warning> value) =>
        new(Optional<IReadOnlyList<Warning>>.Some(value), default);

    internal static Warnings Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfWarning([NotNullWhen(true)] out IReadOnlyList<Warning>? value) =>
        _listOfWarningValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<Warning>, TResult> onListOfWarning,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfWarning(out var listOfWarningValue) => onListOfWarning(listOfWarningValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Warnings)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Warning>> onListOfWarning, Action<JsonElement> otherwise)
    {
        if (TryGetListOfWarning(out var listOfWarningValue)) onListOfWarning(listOfWarningValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Warnings)} holds no value.");
    }
}

file sealed class WarningsConverter : JsonConverter<Warnings>
{
    public override Warnings Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Warning>>(root, options, out var listOfWarningValue))
        {
            return Warnings.ListOfWarning(listOfWarningValue);
        }
        return Warnings.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Warnings value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfWarning(out var listOfWarningValue))
        {
            JsonSerializer.Serialize(writer, listOfWarningValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Warnings)} contains no valid value to serialize.");
        }
    }
}
