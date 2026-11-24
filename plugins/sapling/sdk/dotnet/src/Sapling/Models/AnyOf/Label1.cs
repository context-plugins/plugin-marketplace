using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;
using Sapling.Core.Validation;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(Label1Converter))]
public record Label1
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<Label> _labelValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Label1(Optional<string> stringValue, Optional<Label> labelValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _labelValue = labelValue;
        _unknownValue = unknownValue;
    }

    public static Label1 String(string value) => new(Optional<string>.Some(value), default, default);

    public static Label1 Label(Label value) => new(default, Optional<Label>.Some(value), default);

    internal static Label1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetLabel([NotNullWhen(true)] out Label? value) => _labelValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Label1(string value) => String(value);

    public static implicit operator Label1(Label value) => Label(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<Label, TResult> onLabel,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetLabel(out var labelValue) => onLabel(labelValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Label1)} holds no value.")
        };

    public void Match(Action<string> onString, Action<Label> onLabel, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetLabel(out var labelValue)) onLabel(labelValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Label1)} holds no value.");
    }
}

file sealed class Label1Converter : JsonConverter<Label1>
{
    public override Label1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            if (value.HasMinLength(1) && value.HasMaxLength(50))
            {
                return Label1.String(value);
            }
        }
        if (JsonSerializer.TryDeserialize<Label>(root, options, out var labelValue))
        {
            return Label1.Label(labelValue);
        }
        return Label1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Label1 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetLabel(out var labelValue))
        {
            JsonSerializer.Serialize(writer, labelValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Label1)} contains no valid value to serialize.");
        }
    }
}
