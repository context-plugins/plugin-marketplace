using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(ModelsSizeResponseConverter))]
public record ModelsSizeResponse
{
    private readonly Optional<StartAudienceSizeJobOutput> _startAudienceSizeJobOutputValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ModelsSizeResponse(Optional<StartAudienceSizeJobOutput> startAudienceSizeJobOutputValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _startAudienceSizeJobOutputValue = startAudienceSizeJobOutputValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static ModelsSizeResponse StartAudienceSizeJobOutput(StartAudienceSizeJobOutput value) =>
        new(Optional<StartAudienceSizeJobOutput>.Some(value), default, default, default);

    public static ModelsSizeResponse ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static ModelsSizeResponse InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static ModelsSizeResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetStartAudienceSizeJobOutput([NotNullWhen(true)] out StartAudienceSizeJobOutput? value) =>
        _startAudienceSizeJobOutputValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ModelsSizeResponse(StartAudienceSizeJobOutput value) =>
        StartAudienceSizeJobOutput(value);

    public static implicit operator ModelsSizeResponse(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator ModelsSizeResponse(InternalServerError value) => InternalServerError(value);

    public TResult Match<TResult>(Func<StartAudienceSizeJobOutput, TResult> onStartAudienceSizeJobOutput,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetStartAudienceSizeJobOutput(
                out var startAudienceSizeJobOutputValue) => onStartAudienceSizeJobOutput(
                startAudienceSizeJobOutputValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ModelsSizeResponse)} holds no value.")
        };

    public void Match(Action<StartAudienceSizeJobOutput> onStartAudienceSizeJobOutput,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetStartAudienceSizeJobOutput(out var startAudienceSizeJobOutputValue)) onStartAudienceSizeJobOutput(
            startAudienceSizeJobOutputValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ModelsSizeResponse)} holds no value.");
    }
}

file sealed class ModelsSizeResponseConverter : JsonConverter<ModelsSizeResponse>
{
    public override ModelsSizeResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<StartAudienceSizeJobOutput>(
            root,
            options,
            out var startAudienceSizeJobOutputValue))
        {
            return ModelsSizeResponse.StartAudienceSizeJobOutput(startAudienceSizeJobOutputValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return ModelsSizeResponse.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return ModelsSizeResponse.InternalServerError(internalServerErrorValue);
        }
        return ModelsSizeResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ModelsSizeResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetStartAudienceSizeJobOutput(out var startAudienceSizeJobOutputValue))
        {
            JsonSerializer.Serialize(writer, startAudienceSizeJobOutputValue, options);
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
            throw new JsonException($"{nameof(ModelsSizeResponse)} contains no valid value to serialize.");
        }
    }
}
