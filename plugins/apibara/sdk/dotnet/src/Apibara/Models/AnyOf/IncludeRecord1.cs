using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Apibara.Core.Extensions;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models.AnyOf;

[JsonConverter(typeof(IncludeRecord1Converter))]
public record IncludeRecord1
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<IncludeRecord> _includeRecordValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private IncludeRecord1(Optional<bool> boolValue,
        Optional<IncludeRecord> includeRecordValue,
        Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _includeRecordValue = includeRecordValue;
        _unknownValue = unknownValue;
    }

    public static IncludeRecord1 Bool(bool value) => new(Optional<bool>.Some(value), default, default);

    public static IncludeRecord1 IncludeRecord(IncludeRecord value) =>
        new(default, Optional<IncludeRecord>.Some(value), default);

    internal static IncludeRecord1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetIncludeRecord([NotNullWhen(true)] out IncludeRecord? value) =>
        _includeRecordValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator IncludeRecord1(bool value) => Bool(value);

    public static implicit operator IncludeRecord1(IncludeRecord value) => IncludeRecord(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool,
        Func<IncludeRecord, TResult> onIncludeRecord,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetIncludeRecord(out var includeRecordValue) => onIncludeRecord(includeRecordValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(IncludeRecord1)} holds no value.")
        };

    public void Match(Action<bool> onBool, Action<IncludeRecord> onIncludeRecord, Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetIncludeRecord(out var includeRecordValue)) onIncludeRecord(includeRecordValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(IncludeRecord1)} holds no value.");
    }
}

file sealed class IncludeRecord1Converter : JsonConverter<IncludeRecord1>
{
    public override IncludeRecord1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return IncludeRecord1.Bool(boolValue);
        }
        if (JsonSerializer.TryDeserialize<IncludeRecord>(root, options, out var includeRecordValue))
        {
            return IncludeRecord1.IncludeRecord(includeRecordValue);
        }
        return IncludeRecord1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, IncludeRecord1 value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetIncludeRecord(out var includeRecordValue))
        {
            JsonSerializer.Serialize(writer, includeRecordValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(IncludeRecord1)} contains no valid value to serialize.");
        }
    }
}
