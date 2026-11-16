using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(AuthorizationsRequest1Converter))]
public record AuthorizationsRequest1
{
    private readonly Optional<CaptureAuthorization> _captureAuthorizationValue;

    private readonly Optional<CaptureCardPresentAuthorization> _captureCardPresentAuthorizationValue;

    private readonly Optional<CaptureAuthorizationWithSplitTransfers> _captureAuthorizationWithSplitTransfersValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AuthorizationsRequest1(Optional<CaptureAuthorization> captureAuthorizationValue,
        Optional<CaptureCardPresentAuthorization> captureCardPresentAuthorizationValue,
        Optional<CaptureAuthorizationWithSplitTransfers> captureAuthorizationWithSplitTransfersValue,
        Optional<UnknownArm> unknownValue)
    {
        _captureAuthorizationValue = captureAuthorizationValue;
        _captureCardPresentAuthorizationValue = captureCardPresentAuthorizationValue;
        _captureAuthorizationWithSplitTransfersValue = captureAuthorizationWithSplitTransfersValue;
        _unknownValue = unknownValue;
    }

    public static AuthorizationsRequest1 CaptureAuthorization(CaptureAuthorization value) =>
        new(Optional<CaptureAuthorization>.Some(value), default, default, default);

    public static AuthorizationsRequest1 CaptureCardPresentAuthorization(CaptureCardPresentAuthorization value) =>
        new(default, Optional<CaptureCardPresentAuthorization>.Some(value), default, default);

    public static AuthorizationsRequest1 CaptureAuthorizationWithSplitTransfers(CaptureAuthorizationWithSplitTransfers value) =>
        new(default, default, Optional<CaptureAuthorizationWithSplitTransfers>.Some(value), default);

    internal static AuthorizationsRequest1 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCaptureAuthorization([NotNullWhen(true)] out CaptureAuthorization? value) =>
        _captureAuthorizationValue.TryGetValue(out value);

    public bool TryGetCaptureCardPresentAuthorization([NotNullWhen(true)] out CaptureCardPresentAuthorization? value) =>
        _captureCardPresentAuthorizationValue.TryGetValue(out value);

    public bool TryGetCaptureAuthorizationWithSplitTransfers([NotNullWhen(true)] out CaptureAuthorizationWithSplitTransfers? value) =>
        _captureAuthorizationWithSplitTransfersValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AuthorizationsRequest1(CaptureAuthorization value) => CaptureAuthorization(value);

    public static implicit operator AuthorizationsRequest1(CaptureCardPresentAuthorization value) =>
        CaptureCardPresentAuthorization(value);

    public static implicit operator AuthorizationsRequest1(CaptureAuthorizationWithSplitTransfers value) =>
        CaptureAuthorizationWithSplitTransfers(value);

    public TResult Match<TResult>(Func<CaptureAuthorization, TResult> onCaptureAuthorization,
        Func<CaptureCardPresentAuthorization, TResult> onCaptureCardPresentAuthorization,
        Func<CaptureAuthorizationWithSplitTransfers, TResult> onCaptureAuthorizationWithSplitTransfers,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCaptureAuthorization(out var captureAuthorizationValue) => onCaptureAuthorization(
                captureAuthorizationValue),
            _ when TryGetCaptureCardPresentAuthorization(
                out var captureCardPresentAuthorizationValue) => onCaptureCardPresentAuthorization(
                captureCardPresentAuthorizationValue),
            _ when TryGetCaptureAuthorizationWithSplitTransfers(
                out var captureAuthorizationWithSplitTransfersValue) => onCaptureAuthorizationWithSplitTransfers(
                captureAuthorizationWithSplitTransfersValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AuthorizationsRequest1)} holds no value.")
        };

    public void Match(Action<CaptureAuthorization> onCaptureAuthorization,
        Action<CaptureCardPresentAuthorization> onCaptureCardPresentAuthorization,
        Action<CaptureAuthorizationWithSplitTransfers> onCaptureAuthorizationWithSplitTransfers,
        Action<JsonElement> otherwise)
    {
        if (TryGetCaptureAuthorization(out var captureAuthorizationValue)) onCaptureAuthorization(
            captureAuthorizationValue);
        else if (TryGetCaptureCardPresentAuthorization(
            out var captureCardPresentAuthorizationValue)) onCaptureCardPresentAuthorization(
            captureCardPresentAuthorizationValue);
        else if (TryGetCaptureAuthorizationWithSplitTransfers(
            out var captureAuthorizationWithSplitTransfersValue)) onCaptureAuthorizationWithSplitTransfers(
            captureAuthorizationWithSplitTransfersValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AuthorizationsRequest1)} holds no value.");
    }
}

file sealed class AuthorizationsRequest1Converter : JsonConverter<AuthorizationsRequest1>
{
    public override AuthorizationsRequest1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CaptureAuthorization>(root, options, out var captureAuthorizationValue))
        {
            return AuthorizationsRequest1.CaptureAuthorization(captureAuthorizationValue);
        }
        if (JsonSerializer.TryDeserialize<CaptureCardPresentAuthorization>(
            root,
            options,
            out var captureCardPresentAuthorizationValue))
        {
            return AuthorizationsRequest1.CaptureCardPresentAuthorization(captureCardPresentAuthorizationValue);
        }
        if (JsonSerializer.TryDeserialize<CaptureAuthorizationWithSplitTransfers>(
            root,
            options,
            out var captureAuthorizationWithSplitTransfersValue))
        {
            return AuthorizationsRequest1.CaptureAuthorizationWithSplitTransfers(
                captureAuthorizationWithSplitTransfersValue);
        }
        return AuthorizationsRequest1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AuthorizationsRequest1 value, JsonSerializerOptions options)
    {
        if (value.TryGetCaptureAuthorization(out var captureAuthorizationValue))
        {
            JsonSerializer.Serialize(writer, captureAuthorizationValue, options);
        }
        else if (value.TryGetCaptureCardPresentAuthorization(out var captureCardPresentAuthorizationValue))
        {
            JsonSerializer.Serialize(writer, captureCardPresentAuthorizationValue, options);
        }
        else if (value.TryGetCaptureAuthorizationWithSplitTransfers(
            out var captureAuthorizationWithSplitTransfersValue))
        {
            JsonSerializer.Serialize(writer, captureAuthorizationWithSplitTransfersValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AuthorizationsRequest1)} contains no valid value to serialize.");
        }
    }
}
