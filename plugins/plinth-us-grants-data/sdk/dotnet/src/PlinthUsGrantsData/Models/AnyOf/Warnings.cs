using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(WarningsConverter))]
public record Warnings
{
    private readonly Optional<IReadOnlyList<ResponseWarning>> _listOfResponseWarningValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Warnings(Optional<IReadOnlyList<ResponseWarning>> listOfResponseWarningValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfResponseWarningValue = listOfResponseWarningValue;
        _unknownValue = unknownValue;
    }

    public static Warnings ListOfResponseWarning(IReadOnlyList<ResponseWarning> value) =>
        new(Optional<IReadOnlyList<ResponseWarning>>.Some(value), default);

    internal static Warnings Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfResponseWarning([NotNullWhen(true)] out IReadOnlyList<ResponseWarning>? value) =>
        _listOfResponseWarningValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<ResponseWarning>, TResult> onListOfResponseWarning,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfResponseWarning(out var listOfResponseWarningValue) => onListOfResponseWarning(
                listOfResponseWarningValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Warnings)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<ResponseWarning>> onListOfResponseWarning, Action<JsonElement> otherwise)
    {
        if (TryGetListOfResponseWarning(out var listOfResponseWarningValue)) onListOfResponseWarning(
            listOfResponseWarningValue);
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
        if (JsonSerializer.TryDeserialize<IReadOnlyList<ResponseWarning>>(
            root,
            options,
            out var listOfResponseWarningValue))
        {
            return Warnings.ListOfResponseWarning(listOfResponseWarningValue);
        }
        return Warnings.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Warnings value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfResponseWarning(out var listOfResponseWarningValue))
        {
            JsonSerializer.Serialize(writer, listOfResponseWarningValue, options);
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
