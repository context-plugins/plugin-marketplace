using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Statable.Core.Extensions;
using Statable.Core.Models;
using Statable.Models.Enums;

namespace Statable.Models.AnyOf;

/// <summary>
/// <c>"previous_period"</c> (equal-length window before date_range) or a custom <c>["YYYY-MM-DD","YYYY-MM-DD"]</c> pair. Adds a <c>compare</c> {value, change%} block — per metric (aggregate), per row (breakdown, each row's true previous value; not on event:status_code/event:goal), or per bucket (time-series) — plus <c>compare_date_range</c> to the query echo. The compare range must be the same length as date_range (<c>previous_period</c> always is) → an unequal custom pair yields <c>compare_length_mismatch</c>.
/// </summary>
[JsonConverter(typeof(Compare11Converter))]
public record Compare11
{
    private readonly Optional<Compare1> _compare1Value;

    private readonly Optional<IReadOnlyList<DateTimeOffset>> _listOfDateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Compare11(Optional<Compare1> compare1Value,
        Optional<IReadOnlyList<DateTimeOffset>> listOfDateValue,
        Optional<UnknownArm> unknownValue)
    {
        _compare1Value = compare1Value;
        _listOfDateValue = listOfDateValue;
        _unknownValue = unknownValue;
    }

    public static Compare11 Compare1(Compare1 value) => new(Optional<Compare1>.Some(value), default, default);

    public static Compare11 ListOfDate(IReadOnlyList<DateTimeOffset> value) =>
        new(default, Optional<IReadOnlyList<DateTimeOffset>>.Some(value), default);

    internal static Compare11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCompare1([NotNullWhen(true)] out Compare1? value) => _compare1Value.TryGetValue(out value);

    public bool TryGetListOfDate([NotNullWhen(true)] out IReadOnlyList<DateTimeOffset>? value) =>
        _listOfDateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Compare11(Compare1 value) => Compare1(value);

    public TResult Match<TResult>(Func<Compare1, TResult> onCompare1,
        Func<IReadOnlyList<DateTimeOffset>, TResult> onListOfDate,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCompare1(out var compare1Value) => onCompare1(compare1Value),
            _ when TryGetListOfDate(out var listOfDateValue) => onListOfDate(listOfDateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Compare11)} holds no value.")
        };

    public void Match(Action<Compare1> onCompare1,
        Action<IReadOnlyList<DateTimeOffset>> onListOfDate,
        Action<JsonElement> otherwise)
    {
        if (TryGetCompare1(out var compare1Value)) onCompare1(compare1Value);
        else if (TryGetListOfDate(out var listOfDateValue)) onListOfDate(listOfDateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Compare11)} holds no value.");
    }
}

file sealed class Compare11Converter : JsonConverter<Compare11>
{
    public override Compare11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Compare1>(root, options, out var compare1Value))
        {
            return Compare11.Compare1(compare1Value);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<DateTimeOffset>>(root, options, out var listOfDateValue))
        {
            return Compare11.ListOfDate(listOfDateValue);
        }
        return Compare11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Compare11 value, JsonSerializerOptions options)
    {
        if (value.TryGetCompare1(out var compare1Value))
        {
            JsonSerializer.Serialize(writer, compare1Value, options);
        }
        else if (value.TryGetListOfDate(out var listOfDateValue))
        {
            JsonSerializer.Serialize(writer, listOfDateValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Compare11)} contains no valid value to serialize.");
        }
    }
}
