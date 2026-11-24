using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(SyncTemplatesResponse1Converter))]
public record SyncTemplatesResponse1
{
    private readonly Optional<SyncTemplate> _syncTemplateValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SyncTemplatesResponse1(Optional<SyncTemplate> syncTemplateValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _syncTemplateValue = syncTemplateValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static SyncTemplatesResponse1 SyncTemplate(SyncTemplate value) =>
        new(Optional<SyncTemplate>.Some(value), default, default, default);

    public static SyncTemplatesResponse1 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static SyncTemplatesResponse1 InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static SyncTemplatesResponse1 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSyncTemplate([NotNullWhen(true)] out SyncTemplate? value) =>
        _syncTemplateValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SyncTemplatesResponse1(SyncTemplate value) => SyncTemplate(value);

    public static implicit operator SyncTemplatesResponse1(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator SyncTemplatesResponse1(InternalServerError value) => InternalServerError(value);

    public TResult Match<TResult>(Func<SyncTemplate, TResult> onSyncTemplate,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSyncTemplate(out var syncTemplateValue) => onSyncTemplate(syncTemplateValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SyncTemplatesResponse1)} holds no value.")
        };

    public void Match(Action<SyncTemplate> onSyncTemplate,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetSyncTemplate(out var syncTemplateValue)) onSyncTemplate(syncTemplateValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SyncTemplatesResponse1)} holds no value.");
    }
}

file sealed class SyncTemplatesResponse1Converter : JsonConverter<SyncTemplatesResponse1>
{
    public override SyncTemplatesResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SyncTemplate>(root, options, out var syncTemplateValue))
        {
            return SyncTemplatesResponse1.SyncTemplate(syncTemplateValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return SyncTemplatesResponse1.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return SyncTemplatesResponse1.InternalServerError(internalServerErrorValue);
        }
        return SyncTemplatesResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SyncTemplatesResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetSyncTemplate(out var syncTemplateValue))
        {
            JsonSerializer.Serialize(writer, syncTemplateValue, options);
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
            throw new JsonException($"{nameof(SyncTemplatesResponse1)} contains no valid value to serialize.");
        }
    }
}
