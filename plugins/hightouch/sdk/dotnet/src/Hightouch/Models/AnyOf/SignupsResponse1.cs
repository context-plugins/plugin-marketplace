using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(SignupsResponse1Converter))]
public record SignupsResponse1
{
    private readonly Optional<SignupErrorResponse> _signupErrorResponseValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SignupsResponse1(Optional<SignupErrorResponse> signupErrorResponseValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<UnknownArm> unknownValue)
    {
        _signupErrorResponseValue = signupErrorResponseValue;
        _validateErrorJsonValue = validateErrorJsonValue;
        _unknownValue = unknownValue;
    }

    public static SignupsResponse1 SignupErrorResponse(SignupErrorResponse value) =>
        new(Optional<SignupErrorResponse>.Some(value), default, default);

    public static SignupsResponse1 ValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default);

    internal static SignupsResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSignupErrorResponse([NotNullWhen(true)] out SignupErrorResponse? value) =>
        _signupErrorResponseValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SignupsResponse1(SignupErrorResponse value) => SignupErrorResponse(value);

    public static implicit operator SignupsResponse1(ValidateErrorJson value) => ValidateErrorJson(value);

    public TResult Match<TResult>(Func<SignupErrorResponse, TResult> onSignupErrorResponse,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSignupErrorResponse(out var signupErrorResponseValue) => onSignupErrorResponse(
                signupErrorResponseValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SignupsResponse1)} holds no value.")
        };

    public void Match(Action<SignupErrorResponse> onSignupErrorResponse,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<JsonElement> otherwise)
    {
        if (TryGetSignupErrorResponse(out var signupErrorResponseValue)) onSignupErrorResponse(
            signupErrorResponseValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SignupsResponse1)} holds no value.");
    }
}

file sealed class SignupsResponse1Converter : JsonConverter<SignupsResponse1>
{
    public override SignupsResponse1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SignupErrorResponse>(root, options, out var signupErrorResponseValue))
        {
            return SignupsResponse1.SignupErrorResponse(signupErrorResponseValue);
        }
        if (JsonSerializer.TryDeserialize<ValidateErrorJson>(root, options, out var validateErrorJsonValue))
        {
            return SignupsResponse1.ValidateErrorJson(validateErrorJsonValue);
        }
        return SignupsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SignupsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetSignupErrorResponse(out var signupErrorResponseValue))
        {
            JsonSerializer.Serialize(writer, signupErrorResponseValue, options);
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
            throw new JsonException($"{nameof(SignupsResponse1)} contains no valid value to serialize.");
        }
    }
}
