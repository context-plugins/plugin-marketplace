using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Mailboxlayer.Core.Extensions;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer.Models.AnyOf;

[JsonConverter(typeof(BulkCheckResponseConverter))]
public record BulkCheckResponse
{
    private readonly Optional<IReadOnlyList<EmailValidationResponse>> _listOfEmailValidationResponseValue;

    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private BulkCheckResponse(Optional<IReadOnlyList<EmailValidationResponse>> listOfEmailValidationResponseValue,
        Optional<ApiErrorModel> apiErrorModelValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfEmailValidationResponseValue = listOfEmailValidationResponseValue;
        _apiErrorModelValue = apiErrorModelValue;
        _unknownValue = unknownValue;
    }

    public static BulkCheckResponse ListOfEmailValidationResponse(IReadOnlyList<EmailValidationResponse> value) =>
        new(Optional<IReadOnlyList<EmailValidationResponse>>.Some(value), default, default);

    public static BulkCheckResponse ApiErrorModel(ApiErrorModel value) =>
        new(default, Optional<ApiErrorModel>.Some(value), default);

    internal static BulkCheckResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfEmailValidationResponse([NotNullWhen(true)] out IReadOnlyList<EmailValidationResponse>? value) =>
        _listOfEmailValidationResponseValue.TryGetValue(out value);

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator BulkCheckResponse(ApiErrorModel value) => ApiErrorModel(value);

    public TResult Match<TResult>(Func<IReadOnlyList<EmailValidationResponse>, TResult> onListOfEmailValidationResponse,
        Func<ApiErrorModel, TResult> onApiErrorModel,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfEmailValidationResponse(
                out var listOfEmailValidationResponseValue) => onListOfEmailValidationResponse(
                listOfEmailValidationResponseValue),
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(BulkCheckResponse)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<EmailValidationResponse>> onListOfEmailValidationResponse,
        Action<ApiErrorModel> onApiErrorModel,
        Action<JsonElement> otherwise)
    {
        if (TryGetListOfEmailValidationResponse(
            out var listOfEmailValidationResponseValue)) onListOfEmailValidationResponse(
            listOfEmailValidationResponseValue);
        else if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(BulkCheckResponse)} holds no value.");
    }
}

file sealed class BulkCheckResponseConverter : JsonConverter<BulkCheckResponse>
{
    public override BulkCheckResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<EmailValidationResponse>>(
            root,
            options,
            out var listOfEmailValidationResponseValue))
        {
            return BulkCheckResponse.ListOfEmailValidationResponse(listOfEmailValidationResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ApiErrorModel>(root, options, out var apiErrorModelValue))
        {
            return BulkCheckResponse.ApiErrorModel(apiErrorModelValue);
        }
        return BulkCheckResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, BulkCheckResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfEmailValidationResponse(out var listOfEmailValidationResponseValue))
        {
            JsonSerializer.Serialize(writer, listOfEmailValidationResponseValue, options);
        }
        else if (value.TryGetApiErrorModel(out var apiErrorModelValue))
        {
            JsonSerializer.Serialize(writer, apiErrorModelValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(BulkCheckResponse)} contains no valid value to serialize.");
        }
    }
}
