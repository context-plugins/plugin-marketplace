using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Mailboxlayer.Core.Extensions;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer.Models.AnyOf;

[JsonConverter(typeof(CheckResponseConverter))]
public record CheckResponse
{
    private readonly Optional<EmailValidationResponse> _emailValidationResponseValue;

    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CheckResponse(Optional<EmailValidationResponse> emailValidationResponseValue,
        Optional<ApiErrorModel> apiErrorModelValue,
        Optional<UnknownArm> unknownValue)
    {
        _emailValidationResponseValue = emailValidationResponseValue;
        _apiErrorModelValue = apiErrorModelValue;
        _unknownValue = unknownValue;
    }

    public static CheckResponse EmailValidationResponse(EmailValidationResponse value) =>
        new(Optional<EmailValidationResponse>.Some(value), default, default);

    public static CheckResponse ApiErrorModel(ApiErrorModel value) =>
        new(default, Optional<ApiErrorModel>.Some(value), default);

    internal static CheckResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetEmailValidationResponse([NotNullWhen(true)] out EmailValidationResponse? value) =>
        _emailValidationResponseValue.TryGetValue(out value);

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CheckResponse(EmailValidationResponse value) => EmailValidationResponse(value);

    public static implicit operator CheckResponse(ApiErrorModel value) => ApiErrorModel(value);

    public TResult Match<TResult>(Func<EmailValidationResponse, TResult> onEmailValidationResponse,
        Func<ApiErrorModel, TResult> onApiErrorModel,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEmailValidationResponse(out var emailValidationResponseValue) => onEmailValidationResponse(
                emailValidationResponseValue),
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CheckResponse)} holds no value.")
        };

    public void Match(Action<EmailValidationResponse> onEmailValidationResponse,
        Action<ApiErrorModel> onApiErrorModel,
        Action<JsonElement> otherwise)
    {
        if (TryGetEmailValidationResponse(out var emailValidationResponseValue)) onEmailValidationResponse(
            emailValidationResponseValue);
        else if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CheckResponse)} holds no value.");
    }
}

file sealed class CheckResponseConverter : JsonConverter<CheckResponse>
{
    public override CheckResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<EmailValidationResponse>(root, options, out var emailValidationResponseValue))
        {
            return CheckResponse.EmailValidationResponse(emailValidationResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ApiErrorModel>(root, options, out var apiErrorModelValue))
        {
            return CheckResponse.ApiErrorModel(apiErrorModelValue);
        }
        return CheckResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CheckResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetEmailValidationResponse(out var emailValidationResponseValue))
        {
            JsonSerializer.Serialize(writer, emailValidationResponseValue, options);
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
            throw new JsonException($"{nameof(CheckResponse)} contains no valid value to serialize.");
        }
    }
}
