using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Statable.Core.Extensions;
using Statable.Core.Models;
using Statable.Core.Validation;

namespace Statable.Models.AnyOf;

/// <summary>
/// A scalar string — a preset (<c>7d</c>/<c>30d</c> = last N full days; <c>month</c> = current calendar month to date; <c>realtime</c> = last ~30 min) or a bare <c>Nd</c> for the last N days, N in 1–90 (e.g. <c>14d</c>) — OR a custom inclusive <c>[from, to]</c> pair of <c>YYYY-MM-DD</c> dates with <c>from &lt;= to</c> and a span of at most 366 days. The scalar forms are exactly what <c>GET /sites</c> accepts; for a window over 90 days use a custom pair.
/// </summary>
[JsonConverter(typeof(DateRangeConverter))]
public record DateRange
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<IReadOnlyList<DateTimeOffset>> _listOfDateValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private DateRange(Optional<string> stringValue,
        Optional<IReadOnlyList<DateTimeOffset>> listOfDateValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _listOfDateValue = listOfDateValue;
        _unknownValue = unknownValue;
    }

    public static DateRange String(string value) => new(Optional<string>.Some(value), default, default);

    public static DateRange ListOfDate(IReadOnlyList<DateTimeOffset> value) =>
        new(default, Optional<IReadOnlyList<DateTimeOffset>>.Some(value), default);

    internal static DateRange Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetListOfDate([NotNullWhen(true)] out IReadOnlyList<DateTimeOffset>? value) =>
        _listOfDateValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DateRange(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<IReadOnlyList<DateTimeOffset>, TResult> onListOfDate,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetListOfDate(out var listOfDateValue) => onListOfDate(listOfDateValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DateRange)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<IReadOnlyList<DateTimeOffset>> onListOfDate,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetListOfDate(out var listOfDateValue)) onListOfDate(listOfDateValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DateRange)} holds no value.");
    }
}

file sealed class DateRangeConverter : JsonConverter<DateRange>
{
    public override DateRange Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.MatchesPattern("^(month|realtime|([1-9]|[1-8][0-9]|90)d)$"))
            {
                return DateRange.String(value);
            }
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<DateTimeOffset>>(root, options, out var listOfDateValue))
        {
            return DateRange.ListOfDate(listOfDateValue);
        }
        return DateRange.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DateRange value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
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
            throw new JsonException($"{nameof(DateRange)} contains no valid value to serialize.");
        }
    }
}
