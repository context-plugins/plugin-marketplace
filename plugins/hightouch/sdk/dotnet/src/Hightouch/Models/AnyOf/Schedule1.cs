using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(Schedule1Converter))]
public record Schedule1
{
    private readonly Optional<IntervalSchedule> _intervalScheduleValue;

    private readonly Optional<CronSchedule> _cronScheduleValue;

    private readonly Optional<VisualCronSchedule> _visualCronScheduleValue;

    private readonly Optional<DbtSchedule> _dbtScheduleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Schedule1(Optional<IntervalSchedule> intervalScheduleValue,
        Optional<CronSchedule> cronScheduleValue,
        Optional<VisualCronSchedule> visualCronScheduleValue,
        Optional<DbtSchedule> dbtScheduleValue,
        Optional<UnknownArm> unknownValue)
    {
        _intervalScheduleValue = intervalScheduleValue;
        _cronScheduleValue = cronScheduleValue;
        _visualCronScheduleValue = visualCronScheduleValue;
        _dbtScheduleValue = dbtScheduleValue;
        _unknownValue = unknownValue;
    }

    public static Schedule1 IntervalSchedule(IntervalSchedule value) =>
        new(Optional<IntervalSchedule>.Some(value), default, default, default, default);

    public static Schedule1 CronSchedule(CronSchedule value) =>
        new(default, Optional<CronSchedule>.Some(value), default, default, default);

    public static Schedule1 VisualCronSchedule(VisualCronSchedule value) =>
        new(default, default, Optional<VisualCronSchedule>.Some(value), default, default);

    public static Schedule1 DbtSchedule(DbtSchedule value) =>
        new(default, default, default, Optional<DbtSchedule>.Some(value), default);

    internal static Schedule1 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetIntervalSchedule([NotNullWhen(true)] out IntervalSchedule? value) =>
        _intervalScheduleValue.TryGetValue(out value);

    public bool TryGetCronSchedule([NotNullWhen(true)] out CronSchedule? value) =>
        _cronScheduleValue.TryGetValue(out value);

    public bool TryGetVisualCronSchedule([NotNullWhen(true)] out VisualCronSchedule? value) =>
        _visualCronScheduleValue.TryGetValue(out value);

    public bool TryGetDbtSchedule([NotNullWhen(true)] out DbtSchedule? value) =>
        _dbtScheduleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Schedule1(IntervalSchedule value) => IntervalSchedule(value);

    public static implicit operator Schedule1(CronSchedule value) => CronSchedule(value);

    public static implicit operator Schedule1(VisualCronSchedule value) => VisualCronSchedule(value);

    public static implicit operator Schedule1(DbtSchedule value) => DbtSchedule(value);

    public TResult Match<TResult>(Func<IntervalSchedule, TResult> onIntervalSchedule,
        Func<CronSchedule, TResult> onCronSchedule,
        Func<VisualCronSchedule, TResult> onVisualCronSchedule,
        Func<DbtSchedule, TResult> onDbtSchedule,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetIntervalSchedule(out var intervalScheduleValue) => onIntervalSchedule(intervalScheduleValue),
            _ when TryGetCronSchedule(out var cronScheduleValue) => onCronSchedule(cronScheduleValue),
            _ when TryGetVisualCronSchedule(out var visualCronScheduleValue) => onVisualCronSchedule(
                visualCronScheduleValue),
            _ when TryGetDbtSchedule(out var dbtScheduleValue) => onDbtSchedule(dbtScheduleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Schedule1)} holds no value.")
        };

    public void Match(Action<IntervalSchedule> onIntervalSchedule,
        Action<CronSchedule> onCronSchedule,
        Action<VisualCronSchedule> onVisualCronSchedule,
        Action<DbtSchedule> onDbtSchedule,
        Action<JsonElement> otherwise)
    {
        if (TryGetIntervalSchedule(out var intervalScheduleValue)) onIntervalSchedule(intervalScheduleValue);
        else if (TryGetCronSchedule(out var cronScheduleValue)) onCronSchedule(cronScheduleValue);
        else if (TryGetVisualCronSchedule(out var visualCronScheduleValue)) onVisualCronSchedule(
            visualCronScheduleValue);
        else if (TryGetDbtSchedule(out var dbtScheduleValue)) onDbtSchedule(dbtScheduleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Schedule1)} holds no value.");
    }
}

file sealed class Schedule1Converter : JsonConverter<Schedule1>
{
    public override Schedule1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IntervalSchedule>(root, options, out var intervalScheduleValue))
        {
            return Schedule1.IntervalSchedule(intervalScheduleValue);
        }
        if (JsonSerializer.TryDeserialize<CronSchedule>(root, options, out var cronScheduleValue))
        {
            return Schedule1.CronSchedule(cronScheduleValue);
        }
        if (JsonSerializer.TryDeserialize<VisualCronSchedule>(root, options, out var visualCronScheduleValue))
        {
            return Schedule1.VisualCronSchedule(visualCronScheduleValue);
        }
        if (JsonSerializer.TryDeserialize<DbtSchedule>(root, options, out var dbtScheduleValue))
        {
            return Schedule1.DbtSchedule(dbtScheduleValue);
        }
        return Schedule1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Schedule1 value, JsonSerializerOptions options)
    {
        if (value.TryGetIntervalSchedule(out var intervalScheduleValue))
        {
            JsonSerializer.Serialize(writer, intervalScheduleValue, options);
        }
        else if (value.TryGetCronSchedule(out var cronScheduleValue))
        {
            JsonSerializer.Serialize(writer, cronScheduleValue, options);
        }
        else if (value.TryGetVisualCronSchedule(out var visualCronScheduleValue))
        {
            JsonSerializer.Serialize(writer, visualCronScheduleValue, options);
        }
        else if (value.TryGetDbtSchedule(out var dbtScheduleValue))
        {
            JsonSerializer.Serialize(writer, dbtScheduleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Schedule1)} contains no valid value to serialize.");
        }
    }
}
