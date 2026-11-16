using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(AuthorizationsRequestConverter))]
public record AuthorizationsRequest
{
    private readonly Optional<AuthorizationMinimalFields> _authorizationMinimalFieldsValue;

    private readonly Optional<AuthorizationAllFields> _authorizationAllFieldsValue;

    private readonly Optional<Authorization3DSecure> _authorization3DSecureValue;

    private readonly Optional<Authorization3DSecureSession> _authorization3DSecureSessionValue;

    private readonly Optional<AuthorizationBuyerCharges> _authorizationBuyerChargesValue;

    private readonly Optional<AuthorizationCardPresent> _authorizationCardPresentValue;

    private readonly Optional<AuthorizationAuthorizationWithCvv> _authorizationAuthorizationWithCvvValue;

    private readonly Optional<AuthorizationMotorVehicleRental> _authorizationMotorVehicleRentalValue;

    private readonly Optional<AuthorizationGaming> _authorizationGamingValue;

    private readonly Optional<AuthorizationLodging> _authorizationLodgingValue;

    private readonly Optional<AuthorizationLevel2Processing> _authorizationLevel2ProcessingValue;

    private readonly Optional<AuthorizationLevel3Processing> _authorizationLevel3ProcessingValue;

    private readonly Optional<AuthorizationRecurringOrUnscheduled> _authorizationRecurringOrUnscheduledValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AuthorizationsRequest(Optional<AuthorizationMinimalFields> authorizationMinimalFieldsValue,
        Optional<AuthorizationAllFields> authorizationAllFieldsValue,
        Optional<Authorization3DSecure> authorization3DSecureValue,
        Optional<Authorization3DSecureSession> authorization3DSecureSessionValue,
        Optional<AuthorizationBuyerCharges> authorizationBuyerChargesValue,
        Optional<AuthorizationCardPresent> authorizationCardPresentValue,
        Optional<AuthorizationAuthorizationWithCvv> authorizationAuthorizationWithCvvValue,
        Optional<AuthorizationMotorVehicleRental> authorizationMotorVehicleRentalValue,
        Optional<AuthorizationGaming> authorizationGamingValue,
        Optional<AuthorizationLodging> authorizationLodgingValue,
        Optional<AuthorizationLevel2Processing> authorizationLevel2ProcessingValue,
        Optional<AuthorizationLevel3Processing> authorizationLevel3ProcessingValue,
        Optional<AuthorizationRecurringOrUnscheduled> authorizationRecurringOrUnscheduledValue,
        Optional<UnknownArm> unknownValue)
    {
        _authorizationMinimalFieldsValue = authorizationMinimalFieldsValue;
        _authorizationAllFieldsValue = authorizationAllFieldsValue;
        _authorization3DSecureValue = authorization3DSecureValue;
        _authorization3DSecureSessionValue = authorization3DSecureSessionValue;
        _authorizationBuyerChargesValue = authorizationBuyerChargesValue;
        _authorizationCardPresentValue = authorizationCardPresentValue;
        _authorizationAuthorizationWithCvvValue = authorizationAuthorizationWithCvvValue;
        _authorizationMotorVehicleRentalValue = authorizationMotorVehicleRentalValue;
        _authorizationGamingValue = authorizationGamingValue;
        _authorizationLodgingValue = authorizationLodgingValue;
        _authorizationLevel2ProcessingValue = authorizationLevel2ProcessingValue;
        _authorizationLevel3ProcessingValue = authorizationLevel3ProcessingValue;
        _authorizationRecurringOrUnscheduledValue = authorizationRecurringOrUnscheduledValue;
        _unknownValue = unknownValue;
    }

    public static AuthorizationsRequest AuthorizationMinimalFields(AuthorizationMinimalFields value) =>
        new(
            Optional<AuthorizationMinimalFields>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationAllFields(AuthorizationAllFields value) =>
        new(
            default,
            Optional<AuthorizationAllFields>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest Authorization3DSecure(Authorization3DSecure value) =>
        new(
            default,
            default,
            Optional<Authorization3DSecure>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest Authorization3DSecureSession(Authorization3DSecureSession value) =>
        new(
            default,
            default,
            default,
            Optional<Authorization3DSecureSession>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationBuyerCharges(AuthorizationBuyerCharges value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<AuthorizationBuyerCharges>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationCardPresent(AuthorizationCardPresent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationCardPresent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationAuthorizationWithCvv(AuthorizationAuthorizationWithCvv value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationAuthorizationWithCvv>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationMotorVehicleRental(AuthorizationMotorVehicleRental value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationMotorVehicleRental>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationGaming(AuthorizationGaming value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationGaming>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationLodging(AuthorizationLodging value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationLodging>.Some(value),
            default,
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationLevel2Processing(AuthorizationLevel2Processing value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationLevel2Processing>.Some(value),
            default,
            default,
            default);

    public static AuthorizationsRequest AuthorizationLevel3Processing(AuthorizationLevel3Processing value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationLevel3Processing>.Some(value),
            default,
            default);

    public static AuthorizationsRequest AuthorizationRecurringOrUnscheduled(AuthorizationRecurringOrUnscheduled value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<AuthorizationRecurringOrUnscheduled>.Some(value),
            default);

    internal static AuthorizationsRequest Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAuthorizationMinimalFields([NotNullWhen(true)] out AuthorizationMinimalFields? value) =>
        _authorizationMinimalFieldsValue.TryGetValue(out value);

    public bool TryGetAuthorizationAllFields([NotNullWhen(true)] out AuthorizationAllFields? value) =>
        _authorizationAllFieldsValue.TryGetValue(out value);

    public bool TryGetAuthorization3DSecure([NotNullWhen(true)] out Authorization3DSecure? value) =>
        _authorization3DSecureValue.TryGetValue(out value);

    public bool TryGetAuthorization3DSecureSession([NotNullWhen(true)] out Authorization3DSecureSession? value) =>
        _authorization3DSecureSessionValue.TryGetValue(out value);

    public bool TryGetAuthorizationBuyerCharges([NotNullWhen(true)] out AuthorizationBuyerCharges? value) =>
        _authorizationBuyerChargesValue.TryGetValue(out value);

    public bool TryGetAuthorizationCardPresent([NotNullWhen(true)] out AuthorizationCardPresent? value) =>
        _authorizationCardPresentValue.TryGetValue(out value);

    public bool TryGetAuthorizationAuthorizationWithCvv([NotNullWhen(true)] out AuthorizationAuthorizationWithCvv? value) =>
        _authorizationAuthorizationWithCvvValue.TryGetValue(out value);

    public bool TryGetAuthorizationMotorVehicleRental([NotNullWhen(true)] out AuthorizationMotorVehicleRental? value) =>
        _authorizationMotorVehicleRentalValue.TryGetValue(out value);

    public bool TryGetAuthorizationGaming([NotNullWhen(true)] out AuthorizationGaming? value) =>
        _authorizationGamingValue.TryGetValue(out value);

    public bool TryGetAuthorizationLodging([NotNullWhen(true)] out AuthorizationLodging? value) =>
        _authorizationLodgingValue.TryGetValue(out value);

    public bool TryGetAuthorizationLevel2Processing([NotNullWhen(true)] out AuthorizationLevel2Processing? value) =>
        _authorizationLevel2ProcessingValue.TryGetValue(out value);

    public bool TryGetAuthorizationLevel3Processing([NotNullWhen(true)] out AuthorizationLevel3Processing? value) =>
        _authorizationLevel3ProcessingValue.TryGetValue(out value);

    public bool TryGetAuthorizationRecurringOrUnscheduled([NotNullWhen(true)] out AuthorizationRecurringOrUnscheduled? value) =>
        _authorizationRecurringOrUnscheduledValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AuthorizationsRequest(AuthorizationMinimalFields value) =>
        AuthorizationMinimalFields(value);

    public static implicit operator AuthorizationsRequest(AuthorizationAllFields value) =>
        AuthorizationAllFields(value);

    public static implicit operator AuthorizationsRequest(Authorization3DSecure value) => Authorization3DSecure(value);

    public static implicit operator AuthorizationsRequest(Authorization3DSecureSession value) =>
        Authorization3DSecureSession(value);

    public static implicit operator AuthorizationsRequest(AuthorizationBuyerCharges value) =>
        AuthorizationBuyerCharges(value);

    public static implicit operator AuthorizationsRequest(AuthorizationCardPresent value) =>
        AuthorizationCardPresent(value);

    public static implicit operator AuthorizationsRequest(AuthorizationAuthorizationWithCvv value) =>
        AuthorizationAuthorizationWithCvv(value);

    public static implicit operator AuthorizationsRequest(AuthorizationMotorVehicleRental value) =>
        AuthorizationMotorVehicleRental(value);

    public static implicit operator AuthorizationsRequest(AuthorizationGaming value) => AuthorizationGaming(value);

    public static implicit operator AuthorizationsRequest(AuthorizationLodging value) => AuthorizationLodging(value);

    public static implicit operator AuthorizationsRequest(AuthorizationLevel2Processing value) =>
        AuthorizationLevel2Processing(value);

    public static implicit operator AuthorizationsRequest(AuthorizationLevel3Processing value) =>
        AuthorizationLevel3Processing(value);

    public static implicit operator AuthorizationsRequest(AuthorizationRecurringOrUnscheduled value) =>
        AuthorizationRecurringOrUnscheduled(value);

    public TResult Match<TResult>(Func<AuthorizationMinimalFields, TResult> onAuthorizationMinimalFields,
        Func<AuthorizationAllFields, TResult> onAuthorizationAllFields,
        Func<Authorization3DSecure, TResult> onAuthorization3DSecure,
        Func<Authorization3DSecureSession, TResult> onAuthorization3DSecureSession,
        Func<AuthorizationBuyerCharges, TResult> onAuthorizationBuyerCharges,
        Func<AuthorizationCardPresent, TResult> onAuthorizationCardPresent,
        Func<AuthorizationAuthorizationWithCvv, TResult> onAuthorizationAuthorizationWithCvv,
        Func<AuthorizationMotorVehicleRental, TResult> onAuthorizationMotorVehicleRental,
        Func<AuthorizationGaming, TResult> onAuthorizationGaming,
        Func<AuthorizationLodging, TResult> onAuthorizationLodging,
        Func<AuthorizationLevel2Processing, TResult> onAuthorizationLevel2Processing,
        Func<AuthorizationLevel3Processing, TResult> onAuthorizationLevel3Processing,
        Func<AuthorizationRecurringOrUnscheduled, TResult> onAuthorizationRecurringOrUnscheduled,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthorizationMinimalFields(
                out var authorizationMinimalFieldsValue) => onAuthorizationMinimalFields(
                authorizationMinimalFieldsValue),
            _ when TryGetAuthorizationAllFields(out var authorizationAllFieldsValue) => onAuthorizationAllFields(
                authorizationAllFieldsValue),
            _ when TryGetAuthorization3DSecure(out var authorization3DSecureValue) => onAuthorization3DSecure(
                authorization3DSecureValue),
            _ when TryGetAuthorization3DSecureSession(
                out var authorization3DSecureSessionValue) => onAuthorization3DSecureSession(
                authorization3DSecureSessionValue),
            _ when TryGetAuthorizationBuyerCharges(
                out var authorizationBuyerChargesValue) => onAuthorizationBuyerCharges(authorizationBuyerChargesValue),
            _ when TryGetAuthorizationCardPresent(out var authorizationCardPresentValue) => onAuthorizationCardPresent(
                authorizationCardPresentValue),
            _ when TryGetAuthorizationAuthorizationWithCvv(
                out var authorizationAuthorizationWithCvvValue) => onAuthorizationAuthorizationWithCvv(
                authorizationAuthorizationWithCvvValue),
            _ when TryGetAuthorizationMotorVehicleRental(
                out var authorizationMotorVehicleRentalValue) => onAuthorizationMotorVehicleRental(
                authorizationMotorVehicleRentalValue),
            _ when TryGetAuthorizationGaming(out var authorizationGamingValue) => onAuthorizationGaming(
                authorizationGamingValue),
            _ when TryGetAuthorizationLodging(out var authorizationLodgingValue) => onAuthorizationLodging(
                authorizationLodgingValue),
            _ when TryGetAuthorizationLevel2Processing(
                out var authorizationLevel2ProcessingValue) => onAuthorizationLevel2Processing(
                authorizationLevel2ProcessingValue),
            _ when TryGetAuthorizationLevel3Processing(
                out var authorizationLevel3ProcessingValue) => onAuthorizationLevel3Processing(
                authorizationLevel3ProcessingValue),
            _ when TryGetAuthorizationRecurringOrUnscheduled(
                out var authorizationRecurringOrUnscheduledValue) => onAuthorizationRecurringOrUnscheduled(
                authorizationRecurringOrUnscheduledValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AuthorizationsRequest)} holds no value.")
        };

    public void Match(Action<AuthorizationMinimalFields> onAuthorizationMinimalFields,
        Action<AuthorizationAllFields> onAuthorizationAllFields,
        Action<Authorization3DSecure> onAuthorization3DSecure,
        Action<Authorization3DSecureSession> onAuthorization3DSecureSession,
        Action<AuthorizationBuyerCharges> onAuthorizationBuyerCharges,
        Action<AuthorizationCardPresent> onAuthorizationCardPresent,
        Action<AuthorizationAuthorizationWithCvv> onAuthorizationAuthorizationWithCvv,
        Action<AuthorizationMotorVehicleRental> onAuthorizationMotorVehicleRental,
        Action<AuthorizationGaming> onAuthorizationGaming,
        Action<AuthorizationLodging> onAuthorizationLodging,
        Action<AuthorizationLevel2Processing> onAuthorizationLevel2Processing,
        Action<AuthorizationLevel3Processing> onAuthorizationLevel3Processing,
        Action<AuthorizationRecurringOrUnscheduled> onAuthorizationRecurringOrUnscheduled,
        Action<JsonElement> otherwise)
    {
        if (TryGetAuthorizationMinimalFields(out var authorizationMinimalFieldsValue)) onAuthorizationMinimalFields(
            authorizationMinimalFieldsValue);
        else if (TryGetAuthorizationAllFields(out var authorizationAllFieldsValue)) onAuthorizationAllFields(
            authorizationAllFieldsValue);
        else if (TryGetAuthorization3DSecure(out var authorization3DSecureValue)) onAuthorization3DSecure(
            authorization3DSecureValue);
        else if (TryGetAuthorization3DSecureSession(
            out var authorization3DSecureSessionValue)) onAuthorization3DSecureSession(
            authorization3DSecureSessionValue);
        else if (TryGetAuthorizationBuyerCharges(out var authorizationBuyerChargesValue)) onAuthorizationBuyerCharges(
            authorizationBuyerChargesValue);
        else if (TryGetAuthorizationCardPresent(out var authorizationCardPresentValue)) onAuthorizationCardPresent(
            authorizationCardPresentValue);
        else if (TryGetAuthorizationAuthorizationWithCvv(
            out var authorizationAuthorizationWithCvvValue)) onAuthorizationAuthorizationWithCvv(
            authorizationAuthorizationWithCvvValue);
        else if (TryGetAuthorizationMotorVehicleRental(
            out var authorizationMotorVehicleRentalValue)) onAuthorizationMotorVehicleRental(
            authorizationMotorVehicleRentalValue);
        else if (TryGetAuthorizationGaming(out var authorizationGamingValue)) onAuthorizationGaming(
            authorizationGamingValue);
        else if (TryGetAuthorizationLodging(out var authorizationLodgingValue)) onAuthorizationLodging(
            authorizationLodgingValue);
        else if (TryGetAuthorizationLevel2Processing(
            out var authorizationLevel2ProcessingValue)) onAuthorizationLevel2Processing(
            authorizationLevel2ProcessingValue);
        else if (TryGetAuthorizationLevel3Processing(
            out var authorizationLevel3ProcessingValue)) onAuthorizationLevel3Processing(
            authorizationLevel3ProcessingValue);
        else if (TryGetAuthorizationRecurringOrUnscheduled(
            out var authorizationRecurringOrUnscheduledValue)) onAuthorizationRecurringOrUnscheduled(
            authorizationRecurringOrUnscheduledValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AuthorizationsRequest)} holds no value.");
    }
}

file sealed class AuthorizationsRequestConverter : JsonConverter<AuthorizationsRequest>
{
    public override AuthorizationsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AuthorizationMinimalFields>(
            root,
            options,
            out var authorizationMinimalFieldsValue))
        {
            return AuthorizationsRequest.AuthorizationMinimalFields(authorizationMinimalFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationAllFields>(root, options, out var authorizationAllFieldsValue))
        {
            return AuthorizationsRequest.AuthorizationAllFields(authorizationAllFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<Authorization3DSecure>(root, options, out var authorization3DSecureValue))
        {
            return AuthorizationsRequest.Authorization3DSecure(authorization3DSecureValue);
        }
        if (JsonSerializer.TryDeserialize<Authorization3DSecureSession>(
            root,
            options,
            out var authorization3DSecureSessionValue))
        {
            return AuthorizationsRequest.Authorization3DSecureSession(authorization3DSecureSessionValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationBuyerCharges>(
            root,
            options,
            out var authorizationBuyerChargesValue))
        {
            return AuthorizationsRequest.AuthorizationBuyerCharges(authorizationBuyerChargesValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationCardPresent>(
            root,
            options,
            out var authorizationCardPresentValue))
        {
            return AuthorizationsRequest.AuthorizationCardPresent(authorizationCardPresentValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationAuthorizationWithCvv>(
            root,
            options,
            out var authorizationAuthorizationWithCvvValue))
        {
            return AuthorizationsRequest.AuthorizationAuthorizationWithCvv(authorizationAuthorizationWithCvvValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationMotorVehicleRental>(
            root,
            options,
            out var authorizationMotorVehicleRentalValue))
        {
            return AuthorizationsRequest.AuthorizationMotorVehicleRental(authorizationMotorVehicleRentalValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationGaming>(root, options, out var authorizationGamingValue))
        {
            return AuthorizationsRequest.AuthorizationGaming(authorizationGamingValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationLodging>(root, options, out var authorizationLodgingValue))
        {
            return AuthorizationsRequest.AuthorizationLodging(authorizationLodgingValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationLevel2Processing>(
            root,
            options,
            out var authorizationLevel2ProcessingValue))
        {
            return AuthorizationsRequest.AuthorizationLevel2Processing(authorizationLevel2ProcessingValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationLevel3Processing>(
            root,
            options,
            out var authorizationLevel3ProcessingValue))
        {
            return AuthorizationsRequest.AuthorizationLevel3Processing(authorizationLevel3ProcessingValue);
        }
        if (JsonSerializer.TryDeserialize<AuthorizationRecurringOrUnscheduled>(
            root,
            options,
            out var authorizationRecurringOrUnscheduledValue))
        {
            return AuthorizationsRequest.AuthorizationRecurringOrUnscheduled(authorizationRecurringOrUnscheduledValue);
        }
        return AuthorizationsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AuthorizationsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetAuthorizationMinimalFields(out var authorizationMinimalFieldsValue))
        {
            JsonSerializer.Serialize(writer, authorizationMinimalFieldsValue, options);
        }
        else if (value.TryGetAuthorizationAllFields(out var authorizationAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, authorizationAllFieldsValue, options);
        }
        else if (value.TryGetAuthorization3DSecure(out var authorization3DSecureValue))
        {
            JsonSerializer.Serialize(writer, authorization3DSecureValue, options);
        }
        else if (value.TryGetAuthorization3DSecureSession(out var authorization3DSecureSessionValue))
        {
            JsonSerializer.Serialize(writer, authorization3DSecureSessionValue, options);
        }
        else if (value.TryGetAuthorizationBuyerCharges(out var authorizationBuyerChargesValue))
        {
            JsonSerializer.Serialize(writer, authorizationBuyerChargesValue, options);
        }
        else if (value.TryGetAuthorizationCardPresent(out var authorizationCardPresentValue))
        {
            JsonSerializer.Serialize(writer, authorizationCardPresentValue, options);
        }
        else if (value.TryGetAuthorizationAuthorizationWithCvv(out var authorizationAuthorizationWithCvvValue))
        {
            JsonSerializer.Serialize(writer, authorizationAuthorizationWithCvvValue, options);
        }
        else if (value.TryGetAuthorizationMotorVehicleRental(out var authorizationMotorVehicleRentalValue))
        {
            JsonSerializer.Serialize(writer, authorizationMotorVehicleRentalValue, options);
        }
        else if (value.TryGetAuthorizationGaming(out var authorizationGamingValue))
        {
            JsonSerializer.Serialize(writer, authorizationGamingValue, options);
        }
        else if (value.TryGetAuthorizationLodging(out var authorizationLodgingValue))
        {
            JsonSerializer.Serialize(writer, authorizationLodgingValue, options);
        }
        else if (value.TryGetAuthorizationLevel2Processing(out var authorizationLevel2ProcessingValue))
        {
            JsonSerializer.Serialize(writer, authorizationLevel2ProcessingValue, options);
        }
        else if (value.TryGetAuthorizationLevel3Processing(out var authorizationLevel3ProcessingValue))
        {
            JsonSerializer.Serialize(writer, authorizationLevel3ProcessingValue, options);
        }
        else if (value.TryGetAuthorizationRecurringOrUnscheduled(out var authorizationRecurringOrUnscheduledValue))
        {
            JsonSerializer.Serialize(writer, authorizationRecurringOrUnscheduledValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AuthorizationsRequest)} contains no valid value to serialize.");
        }
    }
}
