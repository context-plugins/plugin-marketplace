using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Extensions;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models.AnyOf;

[JsonConverter(typeof(SslInspection1Converter))]
public record SslInspection1
{
    private readonly Optional<SslInspectionStateBody> _sslInspectionStateBodyValue;

    private readonly Optional<BaseInheritance> _baseInheritanceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SslInspection1(Optional<SslInspectionStateBody> sslInspectionStateBodyValue,
        Optional<BaseInheritance> baseInheritanceValue,
        Optional<UnknownArm> unknownValue)
    {
        _sslInspectionStateBodyValue = sslInspectionStateBodyValue;
        _baseInheritanceValue = baseInheritanceValue;
        _unknownValue = unknownValue;
    }

    public static SslInspection1 SslInspectionStateBody(SslInspectionStateBody value) =>
        new(Optional<SslInspectionStateBody>.Some(value), default, default);

    public static SslInspection1 BaseInheritance(BaseInheritance value) =>
        new(default, Optional<BaseInheritance>.Some(value), default);

    internal static SslInspection1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSslInspectionStateBody([NotNullWhen(true)] out SslInspectionStateBody? value) =>
        _sslInspectionStateBodyValue.TryGetValue(out value);

    public bool TryGetBaseInheritance([NotNullWhen(true)] out BaseInheritance? value) =>
        _baseInheritanceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SslInspection1(SslInspectionStateBody value) => SslInspectionStateBody(value);

    public static implicit operator SslInspection1(BaseInheritance value) => BaseInheritance(value);

    public TResult Match<TResult>(Func<SslInspectionStateBody, TResult> onSslInspectionStateBody,
        Func<BaseInheritance, TResult> onBaseInheritance,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSslInspectionStateBody(out var sslInspectionStateBodyValue) => onSslInspectionStateBody(
                sslInspectionStateBodyValue),
            _ when TryGetBaseInheritance(out var baseInheritanceValue) => onBaseInheritance(baseInheritanceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SslInspection1)} holds no value.")
        };

    public void Match(Action<SslInspectionStateBody> onSslInspectionStateBody,
        Action<BaseInheritance> onBaseInheritance,
        Action<JsonElement> otherwise)
    {
        if (TryGetSslInspectionStateBody(out var sslInspectionStateBodyValue)) onSslInspectionStateBody(
            sslInspectionStateBodyValue);
        else if (TryGetBaseInheritance(out var baseInheritanceValue)) onBaseInheritance(baseInheritanceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SslInspection1)} holds no value.");
    }
}

file sealed class SslInspection1Converter : JsonConverter<SslInspection1>
{
    public override SslInspection1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SslInspectionStateBody>(root, options, out var sslInspectionStateBodyValue))
        {
            return SslInspection1.SslInspectionStateBody(sslInspectionStateBodyValue);
        }
        if (JsonSerializer.TryDeserialize<BaseInheritance>(root, options, out var baseInheritanceValue))
        {
            return SslInspection1.BaseInheritance(baseInheritanceValue);
        }
        return SslInspection1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SslInspection1 value, JsonSerializerOptions options)
    {
        if (value.TryGetSslInspectionStateBody(out var sslInspectionStateBodyValue))
        {
            JsonSerializer.Serialize(writer, sslInspectionStateBodyValue, options);
        }
        else if (value.TryGetBaseInheritance(out var baseInheritanceValue))
        {
            JsonSerializer.Serialize(writer, baseInheritanceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SslInspection1)} contains no valid value to serialize.");
        }
    }
}
