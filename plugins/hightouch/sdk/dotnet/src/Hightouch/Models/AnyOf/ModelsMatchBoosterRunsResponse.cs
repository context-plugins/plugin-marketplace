using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(ModelsMatchBoosterRunsResponseConverter))]
public record ModelsMatchBoosterRunsResponse
{
    private readonly Optional<ListMatchBoosterRunsOutput> _listMatchBoosterRunsOutputValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ModelsMatchBoosterRunsResponse(Optional<ListMatchBoosterRunsOutput> listMatchBoosterRunsOutputValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<InternalServerError> internalServerErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _listMatchBoosterRunsOutputValue = listMatchBoosterRunsOutputValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _internalServerErrorValue = internalServerErrorValue;
        _unknownValue = unknownValue;
    }

    public static ModelsMatchBoosterRunsResponse ListMatchBoosterRunsOutput(ListMatchBoosterRunsOutput value) =>
        new(Optional<ListMatchBoosterRunsOutput>.Some(value), default, default, default);

    public static ModelsMatchBoosterRunsResponse ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default, default);

    public static ModelsMatchBoosterRunsResponse InternalServerError(InternalServerError value) =>
        new(default, default, Optional<InternalServerError>.Some(value), default);

    internal static ModelsMatchBoosterRunsResponse Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListMatchBoosterRunsOutput([NotNullWhen(true)] out ListMatchBoosterRunsOutput? value) =>
        _listMatchBoosterRunsOutputValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ModelsMatchBoosterRunsResponse(ListMatchBoosterRunsOutput value) =>
        ListMatchBoosterRunsOutput(value);

    public static implicit operator ModelsMatchBoosterRunsResponse(ValidateErrorJson value) => ValidateErrorJson(value);

    public static implicit operator ModelsMatchBoosterRunsResponse(InternalServerError value) =>
        InternalServerError(value);

    public TResult Match<TResult>(Func<ListMatchBoosterRunsOutput, TResult> onListMatchBoosterRunsOutput,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<InternalServerError, TResult> onInternalServerError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListMatchBoosterRunsOutput(
                out var listMatchBoosterRunsOutputValue) => onListMatchBoosterRunsOutput(
                listMatchBoosterRunsOutputValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ModelsMatchBoosterRunsResponse)} holds no value.")
        };

    public void Match(Action<ListMatchBoosterRunsOutput> onListMatchBoosterRunsOutput,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<InternalServerError> onInternalServerError,
        Action<JsonElement> otherwise)
    {
        if (TryGetListMatchBoosterRunsOutput(out var listMatchBoosterRunsOutputValue)) onListMatchBoosterRunsOutput(
            listMatchBoosterRunsOutputValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ModelsMatchBoosterRunsResponse)} holds no value.");
    }
}

file sealed class ModelsMatchBoosterRunsResponseConverter : JsonConverter<ModelsMatchBoosterRunsResponse>
{
    public override ModelsMatchBoosterRunsResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ListMatchBoosterRunsOutput>(
            root,
            options,
            out var listMatchBoosterRunsOutputValue))
        {
            return ModelsMatchBoosterRunsResponse.ListMatchBoosterRunsOutput(listMatchBoosterRunsOutputValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return ModelsMatchBoosterRunsResponse.ValidateErrorJson(validateErrorJsonValue);
        }
        if (JsonSerializer.TryDeserialize<InternalServerError>(root, options, out var internalServerErrorValue))
        {
            return ModelsMatchBoosterRunsResponse.InternalServerError(internalServerErrorValue);
        }
        return ModelsMatchBoosterRunsResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ModelsMatchBoosterRunsResponse value,
        JsonSerializerOptions options)
    {
        if (value.TryGetListMatchBoosterRunsOutput(out var listMatchBoosterRunsOutputValue))
        {
            JsonSerializer.Serialize(writer, listMatchBoosterRunsOutputValue, options);
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
            throw new JsonException($"{nameof(ModelsMatchBoosterRunsResponse)} contains no valid value to serialize.");
        }
    }
}
