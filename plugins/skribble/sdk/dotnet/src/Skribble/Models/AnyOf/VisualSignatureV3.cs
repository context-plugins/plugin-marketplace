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
[JsonConverter(typeof(VisualSignatureV3Converter))]
public record VisualSignatureV3
{
    private readonly Optional<MultiplePositions> _multiplePositionsValue;

    private readonly Optional<FormFieldSkribbleSignatureApi> _formFieldSkribbleSignatureApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private VisualSignatureV3(Optional<MultiplePositions> multiplePositionsValue,
        Optional<FormFieldSkribbleSignatureApi> formFieldSkribbleSignatureApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _multiplePositionsValue = multiplePositionsValue;
        _formFieldSkribbleSignatureApiValue = formFieldSkribbleSignatureApiValue;
        _unknownValue = unknownValue;
    }

    public static VisualSignatureV3 MultiplePositions(MultiplePositions value) =>
        new(Optional<MultiplePositions>.Some(value), default, default);

    public static VisualSignatureV3 FormFieldSkribbleSignatureApi(FormFieldSkribbleSignatureApi value) =>
        new(default, Optional<FormFieldSkribbleSignatureApi>.Some(value), default);

    internal static VisualSignatureV3 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMultiplePositions([NotNullWhen(true)] out MultiplePositions? value) =>
        _multiplePositionsValue.TryGetValue(out value);

    public bool TryGetFormFieldSkribbleSignatureApi([NotNullWhen(true)] out FormFieldSkribbleSignatureApi? value) =>
        _formFieldSkribbleSignatureApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator VisualSignatureV3(MultiplePositions value) => MultiplePositions(value);

    public static implicit operator VisualSignatureV3(FormFieldSkribbleSignatureApi value) =>
        FormFieldSkribbleSignatureApi(value);

    public TResult Match<TResult>(Func<MultiplePositions, TResult> onMultiplePositions,
        Func<FormFieldSkribbleSignatureApi, TResult> onFormFieldSkribbleSignatureApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMultiplePositions(out var multiplePositionsValue) => onMultiplePositions(
                multiplePositionsValue),
            _ when TryGetFormFieldSkribbleSignatureApi(
                out var formFieldSkribbleSignatureApiValue) => onFormFieldSkribbleSignatureApi(
                formFieldSkribbleSignatureApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(VisualSignatureV3)} holds no value.")
        };

    public void Match(Action<MultiplePositions> onMultiplePositions,
        Action<FormFieldSkribbleSignatureApi> onFormFieldSkribbleSignatureApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetMultiplePositions(out var multiplePositionsValue)) onMultiplePositions(multiplePositionsValue);
        else if (TryGetFormFieldSkribbleSignatureApi(
            out var formFieldSkribbleSignatureApiValue)) onFormFieldSkribbleSignatureApi(
            formFieldSkribbleSignatureApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(VisualSignatureV3)} holds no value.");
    }
}

file sealed class VisualSignatureV3Converter : JsonConverter<VisualSignatureV3>
{
    public override VisualSignatureV3 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MultiplePositions>(root, options, out var multiplePositionsValue))
        {
            return VisualSignatureV3.MultiplePositions(multiplePositionsValue);
        }
        if (JsonSerializer.TryDeserialize<FormFieldSkribbleSignatureApi>(
            root,
            options,
            out var formFieldSkribbleSignatureApiValue))
        {
            return VisualSignatureV3.FormFieldSkribbleSignatureApi(formFieldSkribbleSignatureApiValue);
        }
        return VisualSignatureV3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, VisualSignatureV3 value, JsonSerializerOptions options)
    {
        if (value.TryGetMultiplePositions(out var multiplePositionsValue))
        {
            JsonSerializer.Serialize(writer, multiplePositionsValue, options);
        }
        else if (value.TryGetFormFieldSkribbleSignatureApi(out var formFieldSkribbleSignatureApiValue))
        {
            JsonSerializer.Serialize(writer, formFieldSkribbleSignatureApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(VisualSignatureV3)} contains no valid value to serialize.");
        }
    }
}
