using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to <c>active</c> only.
/// </summary>
[JsonConverter(typeof(Status11Converter))]
public record Status11
{
    private readonly Optional<IReadOnlyList<Status1>> _listOfStatus1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Status11(Optional<IReadOnlyList<Status1>> listOfStatus1Value, Optional<UnknownArm> unknownValue)
    {
        _listOfStatus1Value = listOfStatus1Value;
        _unknownValue = unknownValue;
    }

    public static Status11 ListOfStatus1(IReadOnlyList<Status1> value) =>
        new(Optional<IReadOnlyList<Status1>>.Some(value), default);

    internal static Status11 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfStatus1([NotNullWhen(true)] out IReadOnlyList<Status1>? value) =>
        _listOfStatus1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<Status1>, TResult> onListOfStatus1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfStatus1(out var listOfStatus1Value) => onListOfStatus1(listOfStatus1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Status11)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Status1>> onListOfStatus1, Action<JsonElement> otherwise)
    {
        if (TryGetListOfStatus1(out var listOfStatus1Value)) onListOfStatus1(listOfStatus1Value);
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
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Status1>>(root, options, out var listOfStatus1Value))
        {
            return Status11.ListOfStatus1(listOfStatus1Value);
        }
        return Status11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Status11 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfStatus1(out var listOfStatus1Value))
        {
            JsonSerializer.Serialize(writer, listOfStatus1Value, options);
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
