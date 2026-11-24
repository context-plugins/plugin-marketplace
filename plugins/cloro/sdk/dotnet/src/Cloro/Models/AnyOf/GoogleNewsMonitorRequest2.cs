using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cloro.Core.Extensions;
using Cloro.Core.Models;

namespace Cloro.Models.AnyOf;

[JsonConverter(typeof(GoogleNewsMonitorRequest2Converter))]
public record GoogleNewsMonitorRequest2
{
    private readonly Optional<GoogleNewsMonitorRequest> _googleNewsMonitorRequestValue;

    private readonly Optional<GoogleNewsMonitorRequest1> _googleNewsMonitorRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private GoogleNewsMonitorRequest2(Optional<GoogleNewsMonitorRequest> googleNewsMonitorRequestValue,
        Optional<GoogleNewsMonitorRequest1> googleNewsMonitorRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _googleNewsMonitorRequestValue = googleNewsMonitorRequestValue;
        _googleNewsMonitorRequest1Value = googleNewsMonitorRequest1Value;
        _unknownValue = unknownValue;
    }

    public static GoogleNewsMonitorRequest2 GoogleNewsMonitorRequest(GoogleNewsMonitorRequest value) =>
        new(Optional<GoogleNewsMonitorRequest>.Some(value), default, default);

    public static GoogleNewsMonitorRequest2 GoogleNewsMonitorRequest1(GoogleNewsMonitorRequest1 value) =>
        new(default, Optional<GoogleNewsMonitorRequest1>.Some(value), default);

    internal static GoogleNewsMonitorRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGoogleNewsMonitorRequest([NotNullWhen(true)] out GoogleNewsMonitorRequest? value) =>
        _googleNewsMonitorRequestValue.TryGetValue(out value);

    public bool TryGetGoogleNewsMonitorRequest1([NotNullWhen(true)] out GoogleNewsMonitorRequest1? value) =>
        _googleNewsMonitorRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GoogleNewsMonitorRequest2(GoogleNewsMonitorRequest value) =>
        GoogleNewsMonitorRequest(value);

    public static implicit operator GoogleNewsMonitorRequest2(GoogleNewsMonitorRequest1 value) =>
        GoogleNewsMonitorRequest1(value);

    public TResult Match<TResult>(Func<GoogleNewsMonitorRequest, TResult> onGoogleNewsMonitorRequest,
        Func<GoogleNewsMonitorRequest1, TResult> onGoogleNewsMonitorRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleNewsMonitorRequest(out var googleNewsMonitorRequestValue) => onGoogleNewsMonitorRequest(
                googleNewsMonitorRequestValue),
            _ when TryGetGoogleNewsMonitorRequest1(
                out var googleNewsMonitorRequest1Value) => onGoogleNewsMonitorRequest1(googleNewsMonitorRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GoogleNewsMonitorRequest2)} holds no value.")
        };

    public void Match(Action<GoogleNewsMonitorRequest> onGoogleNewsMonitorRequest,
        Action<GoogleNewsMonitorRequest1> onGoogleNewsMonitorRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetGoogleNewsMonitorRequest(out var googleNewsMonitorRequestValue)) onGoogleNewsMonitorRequest(
            googleNewsMonitorRequestValue);
        else if (TryGetGoogleNewsMonitorRequest1(out var googleNewsMonitorRequest1Value)) onGoogleNewsMonitorRequest1(
            googleNewsMonitorRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GoogleNewsMonitorRequest2)} holds no value.");
    }
}

file sealed class GoogleNewsMonitorRequest2Converter : JsonConverter<GoogleNewsMonitorRequest2>
{
    public override GoogleNewsMonitorRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<GoogleNewsMonitorRequest>(
            root,
            options,
            out var googleNewsMonitorRequestValue))
        {
            return GoogleNewsMonitorRequest2.GoogleNewsMonitorRequest(googleNewsMonitorRequestValue);
        }
        if (JsonSerializer.TryDeserialize<GoogleNewsMonitorRequest1>(
            root,
            options,
            out var googleNewsMonitorRequest1Value))
        {
            return GoogleNewsMonitorRequest2.GoogleNewsMonitorRequest1(googleNewsMonitorRequest1Value);
        }
        return GoogleNewsMonitorRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GoogleNewsMonitorRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetGoogleNewsMonitorRequest(out var googleNewsMonitorRequestValue))
        {
            JsonSerializer.Serialize(writer, googleNewsMonitorRequestValue, options);
        }
        else if (value.TryGetGoogleNewsMonitorRequest1(out var googleNewsMonitorRequest1Value))
        {
            JsonSerializer.Serialize(writer, googleNewsMonitorRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GoogleNewsMonitorRequest2)} contains no valid value to serialize.");
        }
    }
}
