using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(SignupsResponseConverter))]
public record SignupsResponse
{
    private readonly Optional<CreateSignupResponse> _createSignupResponseValue;

    private readonly Optional<SignupErrorResponse> _signupErrorResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SignupsResponse(Optional<CreateSignupResponse> createSignupResponseValue,
        Optional<SignupErrorResponse> signupErrorResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _createSignupResponseValue = createSignupResponseValue;
        _signupErrorResponseValue = signupErrorResponseValue;
        _unknownValue = unknownValue;
    }

    public static SignupsResponse CreateSignupResponse(CreateSignupResponse value) =>
        new(Optional<CreateSignupResponse>.Some(value), default, default);

    public static SignupsResponse SignupErrorResponse(SignupErrorResponse value) =>
        new(default, Optional<SignupErrorResponse>.Some(value), default);

    internal static SignupsResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCreateSignupResponse([NotNullWhen(true)] out CreateSignupResponse? value) =>
        _createSignupResponseValue.TryGetValue(out value);

    public bool TryGetSignupErrorResponse([NotNullWhen(true)] out SignupErrorResponse? value) =>
        _signupErrorResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SignupsResponse(CreateSignupResponse value) => CreateSignupResponse(value);

    public static implicit operator SignupsResponse(SignupErrorResponse value) => SignupErrorResponse(value);

    public TResult Match<TResult>(Func<CreateSignupResponse, TResult> onCreateSignupResponse,
        Func<SignupErrorResponse, TResult> onSignupErrorResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCreateSignupResponse(out var createSignupResponseValue) => onCreateSignupResponse(
                createSignupResponseValue),
            _ when TryGetSignupErrorResponse(out var signupErrorResponseValue) => onSignupErrorResponse(
                signupErrorResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SignupsResponse)} holds no value.")
        };

    public void Match(Action<CreateSignupResponse> onCreateSignupResponse,
        Action<SignupErrorResponse> onSignupErrorResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetCreateSignupResponse(out var createSignupResponseValue)) onCreateSignupResponse(
            createSignupResponseValue);
        else if (TryGetSignupErrorResponse(out var signupErrorResponseValue)) onSignupErrorResponse(
            signupErrorResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SignupsResponse)} holds no value.");
    }
}

file sealed class SignupsResponseConverter : JsonConverter<SignupsResponse>
{
    public override SignupsResponse Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CreateSignupResponse>(root, options, out var createSignupResponseValue))
        {
            return SignupsResponse.CreateSignupResponse(createSignupResponseValue);
        }
        if (JsonSerializer.TryDeserialize<SignupErrorResponse>(root, options, out var signupErrorResponseValue))
        {
            return SignupsResponse.SignupErrorResponse(signupErrorResponseValue);
        }
        return SignupsResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SignupsResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetCreateSignupResponse(out var createSignupResponseValue))
        {
            JsonSerializer.Serialize(writer, createSignupResponseValue, options);
        }
        else if (value.TryGetSignupErrorResponse(out var signupErrorResponseValue))
        {
            JsonSerializer.Serialize(writer, signupErrorResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SignupsResponse)} contains no valid value to serialize.");
        }
    }
}
