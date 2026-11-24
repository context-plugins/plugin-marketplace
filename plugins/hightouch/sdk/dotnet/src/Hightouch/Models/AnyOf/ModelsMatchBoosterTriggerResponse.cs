using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(ModelsMatchBoosterTriggerResponseConverter))]
public record ModelsMatchBoosterTriggerResponse
{
    private readonly Optional<MatchBoosterTriggerOutput> _matchBoosterTriggerOutputValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ModelsMatchBoosterTriggerResponse(Optional<MatchBoosterTriggerOutput> matchBoosterTriggerOutputValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _matchBoosterTriggerOutputValue = matchBoosterTriggerOutputValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static ModelsMatchBoosterTriggerResponse MatchBoosterTriggerOutput(MatchBoosterTriggerOutput value) =>
        new(Optional<MatchBoosterTriggerOutput>.Some(value), default, default, default);

    public static ModelsMatchBoosterTriggerResponse ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static ModelsMatchBoosterTriggerResponse InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static ModelsMatchBoosterTriggerResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMatchBoosterTriggerOutput([NotNullWhen(true)] out MatchBoosterTriggerOutput? value) =>
        _matchBoosterTriggerOutputValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ModelsMatchBoosterTriggerResponse(MatchBoosterTriggerOutput value) =>
        MatchBoosterTriggerOutput(value);

    public static implicit operator ModelsMatchBoosterTriggerResponse(ValidateErrorJson value) =>
        ValidateErrorJson(value);

    public static implicit operator ModelsMatchBoosterTriggerResponse(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<MatchBoosterTriggerOutput, TResult> onMatchBoosterTriggerOutput,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMatchBoosterTriggerOutput(
                out var matchBoosterTriggerOutputValue) => onMatchBoosterTriggerOutput(matchBoosterTriggerOutputValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ModelsMatchBoosterTriggerResponse)} holds no value.")
        };

    public void Match(Action<MatchBoosterTriggerOutput> onMatchBoosterTriggerOutput,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetMatchBoosterTriggerOutput(out var matchBoosterTriggerOutputValue)) onMatchBoosterTriggerOutput(
            matchBoosterTriggerOutputValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ModelsMatchBoosterTriggerResponse)} holds no value.");
    }
}

file sealed class ModelsMatchBoosterTriggerResponseConverter : JsonConverter<ModelsMatchBoosterTriggerResponse>
{
    public override ModelsMatchBoosterTriggerResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<MatchBoosterTriggerOutput>(
            root,
            options,
            out var matchBoosterTriggerOutputValue))
        {
            return ModelsMatchBoosterTriggerResponse.MatchBoosterTriggerOutput(matchBoosterTriggerOutputValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return ModelsMatchBoosterTriggerResponse.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return ModelsMatchBoosterTriggerResponse.InternalServerError(internalServerErrorValue);
        }
        return ModelsMatchBoosterTriggerResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ModelsMatchBoosterTriggerResponse value,
        JsonSerializerOptions options)
    {
        if (value.TryGetMatchBoosterTriggerOutput(out var matchBoosterTriggerOutputValue))
        {
            JsonSerializer.Serialize(writer, matchBoosterTriggerOutputValue, options);
        }
        else if (value.TryGetValidateErrorJson(out var validateErrorJsonValue))
        {
            JsonSerializer.Serialize(writer, validateErrorJsonValue, options);
        }
        else if (value.TryGetInternalServerError(out var internalServerErrorValue))
        {
            JsonSerializer.Serialize(writer, internalServerErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(ModelsMatchBoosterTriggerResponse)} contains no valid value to serialize.");
        }
    }
}
