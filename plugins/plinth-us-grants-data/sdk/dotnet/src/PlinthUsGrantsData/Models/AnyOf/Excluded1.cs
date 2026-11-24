using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(Excluded1Converter))]
public record Excluded1
{
    private readonly Optional<ExcludedClass> _excludedClassValue;

    private readonly Optional<bool> _boolValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Excluded1(Optional<ExcludedClass> excludedClassValue,
        Optional<bool> boolValue,
        Optional<UnknownArm> unknownValue)
    {
        _excludedClassValue = excludedClassValue;
        _boolValue = boolValue;
        _unknownValue = unknownValue;
    }

    public static Excluded1 ExcludedClass(ExcludedClass value) =>
        new(Optional<ExcludedClass>.Some(value), default, default);

    public static Excluded1 Bool(bool value) => new(default, Optional<bool>.Some(value), default);

    internal static Excluded1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetExcludedClass([NotNullWhen(true)] out ExcludedClass? value) =>
        _excludedClassValue.TryGetValue(out value);

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Excluded1(ExcludedClass value) => ExcludedClass(value);

    public static implicit operator Excluded1(bool value) => Bool(value);

    public TResult Match<TResult>(Func<ExcludedClass, TResult> onExcludedClass,
        Func<bool, TResult> onBool,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetExcludedClass(out var excludedClassValue) => onExcludedClass(excludedClassValue),
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Excluded1)} holds no value.")
        };

    public void Match(Action<ExcludedClass> onExcludedClass, Action<bool> onBool, Action<JsonElement> otherwise)
    {
        if (TryGetExcludedClass(out var excludedClassValue)) onExcludedClass(excludedClassValue);
        else if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Excluded1)} holds no value.");
    }
}

file sealed class Excluded1Converter : JsonConverter<Excluded1>
{
    public override Excluded1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ExcludedClass>(root, options, out var excludedClassValue))
        {
            return Excluded1.ExcludedClass(excludedClassValue);
        }
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return Excluded1.Bool(boolValue);
        }
        return Excluded1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Excluded1 value, JsonSerializerOptions options)
    {
        if (value.TryGetExcludedClass(out var excludedClassValue))
        {
            JsonSerializer.Serialize(writer, excludedClassValue, options);
        }
        else if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Excluded1)} contains no valid value to serialize.");
        }
    }
}
