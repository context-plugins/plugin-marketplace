using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(SyncsTriggerResponseConverter))]
public record SyncsTriggerResponse
{
    private readonly Optional<TriggerRunOutput> _triggerRunOutputValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SyncsTriggerResponse(Optional<TriggerRunOutput> triggerRunOutputValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<UnknownArm> unknownValue)
    {
        _triggerRunOutputValue = triggerRunOutputValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _unknownValue = unknownValue;
    }

    public static SyncsTriggerResponse TriggerRunOutput(TriggerRunOutput value) =>
        new(Optional<TriggerRunOutput>.Some(value), default, default);

    public static SyncsTriggerResponse ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default);

    internal static SyncsTriggerResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTriggerRunOutput([NotNullWhen(true)] out TriggerRunOutput? value) =>
        _triggerRunOutputValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SyncsTriggerResponse(TriggerRunOutput value) => TriggerRunOutput(value);

    public static implicit operator SyncsTriggerResponse(ValidateErrorJson value) => ValidateErrorJson(value);

    public TResult Match<TResult>(Func<TriggerRunOutput, TResult> onTriggerRunOutput,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTriggerRunOutput(out var triggerRunOutputValue) => onTriggerRunOutput(triggerRunOutputValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SyncsTriggerResponse)} holds no value.")
        };

    public void Match(Action<TriggerRunOutput> onTriggerRunOutput,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<JsonElement> otherwise)
    {
        if (TryGetTriggerRunOutput(out var triggerRunOutputValue)) onTriggerRunOutput(triggerRunOutputValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SyncsTriggerResponse)} holds no value.");
    }
}

file sealed class SyncsTriggerResponseConverter : JsonConverter<SyncsTriggerResponse>
{
    public override SyncsTriggerResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TriggerRunOutput>(root, options, out var triggerRunOutputValue))
        {
            return SyncsTriggerResponse.TriggerRunOutput(triggerRunOutputValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return SyncsTriggerResponse.ValidateErrorJson(validateErrorJsonValue);
        }
        return SyncsTriggerResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SyncsTriggerResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetTriggerRunOutput(out var triggerRunOutputValue))
        {
            JsonSerializer.Serialize(writer, triggerRunOutputValue, options);
        }
        else if (value.TryGetValidateErrorJson(out var validateErrorJsonValue))
        {
            JsonSerializer.Serialize(writer, validateErrorJsonValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SyncsTriggerResponse)} contains no valid value to serialize.");
        }
    }
}
