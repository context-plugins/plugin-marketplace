using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Skribble.Core.Extensions;
using Skribble.Core.Models;

namespace Skribble.Models.AnyOf;

/// <summary>
/// Visual signature placement information.
/// </summary>
[JsonConverter(typeof(VisualSignatureConverter))]
public record VisualSignature
{
    private readonly Optional<SinglePosition> _singlePositionValue;

    private readonly Optional<MultiplePositions> _multiplePositionsValue;

    private readonly Optional<FormField> _formFieldValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private VisualSignature(Optional<SinglePosition> singlePositionValue,
        Optional<MultiplePositions> multiplePositionsValue,
        Optional<FormField> formFieldValue,
        Optional<UnknownArm> unknownValue)
    {
        _singlePositionValue = singlePositionValue;
        _multiplePositionsValue = multiplePositionsValue;
        _formFieldValue = formFieldValue;
        _unknownValue = unknownValue;
    }

    public static VisualSignature SinglePosition(SinglePosition value) =>
        new(Optional<SinglePosition>.Some(value), default, default, default);

    public static VisualSignature MultiplePositions(MultiplePositions value) =>
        new(default, Optional<MultiplePositions>.Some(value), default, default);

    public static VisualSignature FormField(FormField value) =>
        new(default, default, Optional<FormField>.Some(value), default);

    internal static VisualSignature Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSinglePosition([NotNullWhen(true)] out SinglePosition? value) =>
        _singlePositionValue.TryGetValue(out value);

    public bool TryGetMultiplePositions([NotNullWhen(true)] out MultiplePositions? value) =>
        _multiplePositionsValue.TryGetValue(out value);

    public bool TryGetFormField([NotNullWhen(true)] out FormField? value) => _formFieldValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator VisualSignature(SinglePosition value) => SinglePosition(value);

    public static implicit operator VisualSignature(MultiplePositions value) => MultiplePositions(value);

    public static implicit operator VisualSignature(FormField value) => FormField(value);

    public TResult Match<TResult>(Func<SinglePosition, TResult> onSinglePosition,
        Func<MultiplePositions, TResult> onMultiplePositions,
        Func<FormField, TResult> onFormField,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSinglePosition(out var singlePositionValue) => onSinglePosition(singlePositionValue),
            _ when TryGetMultiplePositions(out var multiplePositionsValue) => onMultiplePositions(
                multiplePositionsValue),
            _ when TryGetFormField(out var formFieldValue) => onFormField(formFieldValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(VisualSignature)} holds no value.")
        };

    public void Match(Action<SinglePosition> onSinglePosition,
        Action<MultiplePositions> onMultiplePositions,
        Action<FormField> onFormField,
        Action<JsonElement> otherwise)
    {
        if (TryGetSinglePosition(out var singlePositionValue)) onSinglePosition(singlePositionValue);
        else if (TryGetMultiplePositions(out var multiplePositionsValue)) onMultiplePositions(multiplePositionsValue);
        else if (TryGetFormField(out var formFieldValue)) onFormField(formFieldValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(VisualSignature)} holds no value.");
    }
}

file sealed class VisualSignatureConverter : JsonConverter<VisualSignature>
{
    public override VisualSignature Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SinglePosition>(root, options, out var singlePositionValue))
        {
            return VisualSignature.SinglePosition(singlePositionValue);
        }
        if (JsonSerializer.TryDeserialize<MultiplePositions>(root, options, out var multiplePositionsValue))
        {
            return VisualSignature.MultiplePositions(multiplePositionsValue);
        }
        if (JsonSerializer.TryDeserialize<FormField>(root, options, out var formFieldValue))
        {
            return VisualSignature.FormField(formFieldValue);
        }
        return VisualSignature.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, VisualSignature value, JsonSerializerOptions options)
    {
        if (value.TryGetSinglePosition(out var singlePositionValue))
        {
            JsonSerializer.Serialize(writer, singlePositionValue, options);
        }
        else if (value.TryGetMultiplePositions(out var multiplePositionsValue))
        {
            JsonSerializer.Serialize(writer, multiplePositionsValue, options);
        }
        else if (value.TryGetFormField(out var formFieldValue))
        {
            JsonSerializer.Serialize(writer, formFieldValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(VisualSignature)} contains no valid value to serialize.");
        }
    }
}
