using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cloro.Core.Extensions;
using Cloro.Core.Models;

namespace Cloro.Models.AnyOf;

[JsonConverter(typeof(GoogleMonitorRequest21Converter))]
public record GoogleMonitorRequest21
{
    private readonly Optional<GoogleMonitorRequest3Model> _googleMonitorRequest3ModelValue;

    private readonly Optional<GoogleMonitorRequest31> _googleMonitorRequest31Value;

    private readonly Optional<GoogleMonitorRequest32> _googleMonitorRequest32Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private GoogleMonitorRequest21(Optional<GoogleMonitorRequest3Model> googleMonitorRequest3ModelValue,
        Optional<GoogleMonitorRequest31> googleMonitorRequest31Value,
        Optional<GoogleMonitorRequest32> googleMonitorRequest32Value,
        Optional<UnknownArm> unknownValue)
    {
        _googleMonitorRequest3ModelValue = googleMonitorRequest3ModelValue;
        _googleMonitorRequest31Value = googleMonitorRequest31Value;
        _googleMonitorRequest32Value = googleMonitorRequest32Value;
        _unknownValue = unknownValue;
    }

    public static GoogleMonitorRequest21 GoogleMonitorRequest3Model(GoogleMonitorRequest3Model value) =>
        new(Optional<GoogleMonitorRequest3Model>.Some(value), default, default, default);

    public static GoogleMonitorRequest21 GoogleMonitorRequest31(GoogleMonitorRequest31 value) =>
        new(default, Optional<GoogleMonitorRequest31>.Some(value), default, default);

    public static GoogleMonitorRequest21 GoogleMonitorRequest32(GoogleMonitorRequest32 value) =>
        new(default, default, Optional<GoogleMonitorRequest32>.Some(value), default);

    internal static GoogleMonitorRequest21 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGoogleMonitorRequest3Model([NotNullWhen(true)] out GoogleMonitorRequest3Model? value) =>
        _googleMonitorRequest3ModelValue.TryGetValue(out value);

    public bool TryGetGoogleMonitorRequest31([NotNullWhen(true)] out GoogleMonitorRequest31? value) =>
        _googleMonitorRequest31Value.TryGetValue(out value);

    public bool TryGetGoogleMonitorRequest32([NotNullWhen(true)] out GoogleMonitorRequest32? value) =>
        _googleMonitorRequest32Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GoogleMonitorRequest21(GoogleMonitorRequest3Model value) =>
        GoogleMonitorRequest3Model(value);

    public static implicit operator GoogleMonitorRequest21(GoogleMonitorRequest31 value) =>
        GoogleMonitorRequest31(value);

    public static implicit operator GoogleMonitorRequest21(GoogleMonitorRequest32 value) =>
        GoogleMonitorRequest32(value);

    public TResult Match<TResult>(Func<GoogleMonitorRequest3Model, TResult> onGoogleMonitorRequest3Model,
        Func<GoogleMonitorRequest31, TResult> onGoogleMonitorRequest31,
        Func<GoogleMonitorRequest32, TResult> onGoogleMonitorRequest32,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleMonitorRequest3Model(
                out var googleMonitorRequest3ModelValue) => onGoogleMonitorRequest3Model(
                googleMonitorRequest3ModelValue),
            _ when TryGetGoogleMonitorRequest31(out var googleMonitorRequest31Value) => onGoogleMonitorRequest31(
                googleMonitorRequest31Value),
            _ when TryGetGoogleMonitorRequest32(out var googleMonitorRequest32Value) => onGoogleMonitorRequest32(
                googleMonitorRequest32Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GoogleMonitorRequest21)} holds no value.")
        };

    public void Match(Action<GoogleMonitorRequest3Model> onGoogleMonitorRequest3Model,
        Action<GoogleMonitorRequest31> onGoogleMonitorRequest31,
        Action<GoogleMonitorRequest32> onGoogleMonitorRequest32,
        Action<JsonElement> otherwise)
    {
        if (TryGetGoogleMonitorRequest3Model(out var googleMonitorRequest3ModelValue)) onGoogleMonitorRequest3Model(
            googleMonitorRequest3ModelValue);
        else if (TryGetGoogleMonitorRequest31(out var googleMonitorRequest31Value)) onGoogleMonitorRequest31(
            googleMonitorRequest31Value);
        else if (TryGetGoogleMonitorRequest32(out var googleMonitorRequest32Value)) onGoogleMonitorRequest32(
            googleMonitorRequest32Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GoogleMonitorRequest21)} holds no value.");
    }
}

file sealed class GoogleMonitorRequest21Converter : JsonConverter<GoogleMonitorRequest21>
{
    public override GoogleMonitorRequest21 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<GoogleMonitorRequest3Model>(
            root,
            options,
            out var googleMonitorRequest3ModelValue))
        {
            return GoogleMonitorRequest21.GoogleMonitorRequest3Model(googleMonitorRequest3ModelValue);
        }
        if (JsonSerializer.TryDeserialize<GoogleMonitorRequest31>(root, options, out var googleMonitorRequest31Value))
        {
            return GoogleMonitorRequest21.GoogleMonitorRequest31(googleMonitorRequest31Value);
        }
        if (JsonSerializer.TryDeserialize<GoogleMonitorRequest32>(root, options, out var googleMonitorRequest32Value))
        {
            return GoogleMonitorRequest21.GoogleMonitorRequest32(googleMonitorRequest32Value);
        }
        return GoogleMonitorRequest21.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GoogleMonitorRequest21 value, JsonSerializerOptions options)
    {
        if (value.TryGetGoogleMonitorRequest3Model(out var googleMonitorRequest3ModelValue))
        {
            JsonSerializer.Serialize(writer, googleMonitorRequest3ModelValue, options);
        }
        else if (value.TryGetGoogleMonitorRequest31(out var googleMonitorRequest31Value))
        {
            JsonSerializer.Serialize(writer, googleMonitorRequest31Value, options);
        }
        else if (value.TryGetGoogleMonitorRequest32(out var googleMonitorRequest32Value))
        {
            JsonSerializer.Serialize(writer, googleMonitorRequest32Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GoogleMonitorRequest21)} contains no valid value to serialize.");
        }
    }
}
