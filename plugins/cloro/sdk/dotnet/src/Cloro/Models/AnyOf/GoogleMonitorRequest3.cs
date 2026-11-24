using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cloro.Core.Extensions;
using Cloro.Core.Models;

namespace Cloro.Models.AnyOf;

[JsonConverter(typeof(GoogleMonitorRequest3Converter))]
public record GoogleMonitorRequest3
{
    private readonly Optional<GoogleMonitorRequest> _googleMonitorRequestValue;

    private readonly Optional<GoogleMonitorRequest1> _googleMonitorRequest1Value;

    private readonly Optional<GoogleMonitorRequest2> _googleMonitorRequest2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private GoogleMonitorRequest3(Optional<GoogleMonitorRequest> googleMonitorRequestValue,
        Optional<GoogleMonitorRequest1> googleMonitorRequest1Value,
        Optional<GoogleMonitorRequest2> googleMonitorRequest2Value,
        Optional<UnknownArm> unknownValue)
    {
        _googleMonitorRequestValue = googleMonitorRequestValue;
        _googleMonitorRequest1Value = googleMonitorRequest1Value;
        _googleMonitorRequest2Value = googleMonitorRequest2Value;
        _unknownValue = unknownValue;
    }

    public static GoogleMonitorRequest3 GoogleMonitorRequest(GoogleMonitorRequest value) =>
        new(Optional<GoogleMonitorRequest>.Some(value), default, default, default);

    public static GoogleMonitorRequest3 GoogleMonitorRequest1(GoogleMonitorRequest1 value) =>
        new(default, Optional<GoogleMonitorRequest1>.Some(value), default, default);

    public static GoogleMonitorRequest3 GoogleMonitorRequest2(GoogleMonitorRequest2 value) =>
        new(default, default, Optional<GoogleMonitorRequest2>.Some(value), default);

    internal static GoogleMonitorRequest3 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGoogleMonitorRequest([NotNullWhen(true)] out GoogleMonitorRequest? value) =>
        _googleMonitorRequestValue.TryGetValue(out value);

    public bool TryGetGoogleMonitorRequest1([NotNullWhen(true)] out GoogleMonitorRequest1? value) =>
        _googleMonitorRequest1Value.TryGetValue(out value);

    public bool TryGetGoogleMonitorRequest2([NotNullWhen(true)] out GoogleMonitorRequest2? value) =>
        _googleMonitorRequest2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GoogleMonitorRequest3(GoogleMonitorRequest value) => GoogleMonitorRequest(value);

    public static implicit operator GoogleMonitorRequest3(GoogleMonitorRequest1 value) => GoogleMonitorRequest1(value);

    public static implicit operator GoogleMonitorRequest3(GoogleMonitorRequest2 value) => GoogleMonitorRequest2(value);

    public TResult Match<TResult>(Func<GoogleMonitorRequest, TResult> onGoogleMonitorRequest,
        Func<GoogleMonitorRequest1, TResult> onGoogleMonitorRequest1,
        Func<GoogleMonitorRequest2, TResult> onGoogleMonitorRequest2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleMonitorRequest(out var googleMonitorRequestValue) => onGoogleMonitorRequest(
                googleMonitorRequestValue),
            _ when TryGetGoogleMonitorRequest1(out var googleMonitorRequest1Value) => onGoogleMonitorRequest1(
                googleMonitorRequest1Value),
            _ when TryGetGoogleMonitorRequest2(out var googleMonitorRequest2Value) => onGoogleMonitorRequest2(
                googleMonitorRequest2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GoogleMonitorRequest3)} holds no value.")
        };

    public void Match(Action<GoogleMonitorRequest> onGoogleMonitorRequest,
        Action<GoogleMonitorRequest1> onGoogleMonitorRequest1,
        Action<GoogleMonitorRequest2> onGoogleMonitorRequest2,
        Action<JsonElement> otherwise)
    {
        if (TryGetGoogleMonitorRequest(out var googleMonitorRequestValue)) onGoogleMonitorRequest(
            googleMonitorRequestValue);
        else if (TryGetGoogleMonitorRequest1(out var googleMonitorRequest1Value)) onGoogleMonitorRequest1(
            googleMonitorRequest1Value);
        else if (TryGetGoogleMonitorRequest2(out var googleMonitorRequest2Value)) onGoogleMonitorRequest2(
            googleMonitorRequest2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GoogleMonitorRequest3)} holds no value.");
    }
}

file sealed class GoogleMonitorRequest3Converter : JsonConverter<GoogleMonitorRequest3>
{
    public override GoogleMonitorRequest3 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<GoogleMonitorRequest>(root, options, out var googleMonitorRequestValue))
        {
            return GoogleMonitorRequest3.GoogleMonitorRequest(googleMonitorRequestValue);
        }
        if (JsonSerializer.TryDeserialize<GoogleMonitorRequest1>(root, options, out var googleMonitorRequest1Value))
        {
            return GoogleMonitorRequest3.GoogleMonitorRequest1(googleMonitorRequest1Value);
        }
        if (JsonSerializer.TryDeserialize<GoogleMonitorRequest2>(root, options, out var googleMonitorRequest2Value))
        {
            return GoogleMonitorRequest3.GoogleMonitorRequest2(googleMonitorRequest2Value);
        }
        return GoogleMonitorRequest3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GoogleMonitorRequest3 value, JsonSerializerOptions options)
    {
        if (value.TryGetGoogleMonitorRequest(out var googleMonitorRequestValue))
        {
            JsonSerializer.Serialize(writer, googleMonitorRequestValue, options);
        }
        else if (value.TryGetGoogleMonitorRequest1(out var googleMonitorRequest1Value))
        {
            JsonSerializer.Serialize(writer, googleMonitorRequest1Value, options);
        }
        else if (value.TryGetGoogleMonitorRequest2(out var googleMonitorRequest2Value))
        {
            JsonSerializer.Serialize(writer, googleMonitorRequest2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GoogleMonitorRequest3)} contains no valid value to serialize.");
        }
    }
}
