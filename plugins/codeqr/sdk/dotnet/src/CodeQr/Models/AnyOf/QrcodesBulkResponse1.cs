using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CodeQr.Core.Extensions;
using CodeQr.Core.Models;

namespace CodeQr.Models.AnyOf;

[JsonConverter(typeof(QrcodesBulkResponse1Converter))]
public record QrcodesBulkResponse1
{
    private readonly Optional<QrCode> _qrCodeValue;

    private readonly Optional<QrCodeError> _qrCodeErrorValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private QrcodesBulkResponse1(Optional<QrCode> qrCodeValue,
        Optional<QrCodeError> qrCodeErrorValue,
        Optional<UnknownArm> unknownValue)
    {
        _qrCodeValue = qrCodeValue;
        _qrCodeErrorValue = qrCodeErrorValue;
        _unknownValue = unknownValue;
    }

    public static QrcodesBulkResponse1 QrCode(QrCode value) => new(Optional<QrCode>.Some(value), default, default);

    public static QrcodesBulkResponse1 QrCodeError(QrCodeError value) =>
        new(default, Optional<QrCodeError>.Some(value), default);

    internal static QrcodesBulkResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetQrCode([NotNullWhen(true)] out QrCode? value) => _qrCodeValue.TryGetValue(out value);

    public bool TryGetQrCodeError([NotNullWhen(true)] out QrCodeError? value) =>
        _qrCodeErrorValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator QrcodesBulkResponse1(QrCode value) => QrCode(value);

    public static implicit operator QrcodesBulkResponse1(QrCodeError value) => QrCodeError(value);

    public TResult Match<TResult>(Func<QrCode, TResult> onQrCode,
        Func<QrCodeError, TResult> onQrCodeError,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetQrCode(out var qrCodeValue) => onQrCode(qrCodeValue),
            _ when TryGetQrCodeError(out var qrCodeErrorValue) => onQrCodeError(qrCodeErrorValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(QrcodesBulkResponse1)} holds no value.")
        };

    public void Match(Action<QrCode> onQrCode, Action<QrCodeError> onQrCodeError, Action<JsonElement> otherwise)
    {
        if (TryGetQrCode(out var qrCodeValue)) onQrCode(qrCodeValue);
        else if (TryGetQrCodeError(out var qrCodeErrorValue)) onQrCodeError(qrCodeErrorValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(QrcodesBulkResponse1)} holds no value.");
    }
}

file sealed class QrcodesBulkResponse1Converter : JsonConverter<QrcodesBulkResponse1>
{
    public override QrcodesBulkResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<QrCode>(root, options, out var qrCodeValue))
        {
            return QrcodesBulkResponse1.QrCode(qrCodeValue);
        }
        if (JsonSerializer.TryDeserialize<QrCodeError>(root, options, out var qrCodeErrorValue))
        {
            return QrcodesBulkResponse1.QrCodeError(qrCodeErrorValue);
        }
        return QrcodesBulkResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, QrcodesBulkResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetQrCode(out var qrCodeValue))
        {
            JsonSerializer.Serialize(writer, qrCodeValue, options);
        }
        else if (value.TryGetQrCodeError(out var qrCodeErrorValue))
        {
            JsonSerializer.Serialize(writer, qrCodeErrorValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(QrcodesBulkResponse1)} contains no valid value to serialize.");
        }
    }
}
