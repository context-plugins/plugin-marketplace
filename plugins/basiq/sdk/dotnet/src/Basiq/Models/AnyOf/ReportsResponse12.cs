using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Basiq.Core.Extensions;
using Basiq.Core.Models;

namespace Basiq.Models.AnyOf;

[JsonConverter(typeof(ReportsResponse12Converter))]
public record ReportsResponse12
{
    private readonly Optional<ReportsResponse1> _reportsResponse1Value;

    private readonly Optional<ReportsResponse11> _reportsResponse11Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ReportsResponse12(Optional<ReportsResponse1> reportsResponse1Value,
        Optional<ReportsResponse11> reportsResponse11Value,
        Optional<UnknownArm> unknownValue)
    {
        _reportsResponse1Value = reportsResponse1Value;
        _reportsResponse11Value = reportsResponse11Value;
        _unknownValue = unknownValue;
    }

    public static ReportsResponse12 ReportsResponse1(ReportsResponse1 value) =>
        new(Optional<ReportsResponse1>.Some(value), default, default);

    public static ReportsResponse12 ReportsResponse11(ReportsResponse11 value) =>
        new(default, Optional<ReportsResponse11>.Some(value), default);

    internal static ReportsResponse12 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReportsResponse1([NotNullWhen(true)] out ReportsResponse1? value) =>
        _reportsResponse1Value.TryGetValue(out value);

    public bool TryGetReportsResponse11([NotNullWhen(true)] out ReportsResponse11? value) =>
        _reportsResponse11Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ReportsResponse12(ReportsResponse1 value) => ReportsResponse1(value);

    public static implicit operator ReportsResponse12(ReportsResponse11 value) => ReportsResponse11(value);

    public TResult Match<TResult>(Func<ReportsResponse1, TResult> onReportsResponse1,
        Func<ReportsResponse11, TResult> onReportsResponse11,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReportsResponse1(out var reportsResponse1Value) => onReportsResponse1(reportsResponse1Value),
            _ when TryGetReportsResponse11(out var reportsResponse11Value) => onReportsResponse11(
                reportsResponse11Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ReportsResponse12)} holds no value.")
        };

    public void Match(Action<ReportsResponse1> onReportsResponse1,
        Action<ReportsResponse11> onReportsResponse11,
        Action<JsonElement> otherwise)
    {
        if (TryGetReportsResponse1(out var reportsResponse1Value)) onReportsResponse1(reportsResponse1Value);
        else if (TryGetReportsResponse11(out var reportsResponse11Value)) onReportsResponse11(reportsResponse11Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ReportsResponse12)} holds no value.");
    }
}

file sealed class ReportsResponse12Converter : JsonConverter<ReportsResponse12>
{
    public override ReportsResponse12 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ReportsResponse1>(root, options, out var reportsResponse1Value))
        {
            return ReportsResponse12.ReportsResponse1(reportsResponse1Value);
        }
        if (JsonSerializer.TryDeserialize<ReportsResponse11>(root, options, out var reportsResponse11Value))
        {
            return ReportsResponse12.ReportsResponse11(reportsResponse11Value);
        }
        return ReportsResponse12.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ReportsResponse12 value, JsonSerializerOptions options)
    {
        if (value.TryGetReportsResponse1(out var reportsResponse1Value))
        {
            JsonSerializer.Serialize(writer, reportsResponse1Value, options);
        }
        else if (value.TryGetReportsResponse11(out var reportsResponse11Value))
        {
            JsonSerializer.Serialize(writer, reportsResponse11Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ReportsResponse12)} contains no valid value to serialize.");
        }
    }
}
