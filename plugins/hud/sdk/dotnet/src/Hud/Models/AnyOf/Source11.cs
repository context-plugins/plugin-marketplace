using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Source11Converter))]
public record Source11
{
    private readonly Optional<AtifImageSource> _atifImageSourceValue;

    private readonly Optional<AtifAudioSource> _atifAudioSourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Source11(Optional<AtifImageSource> atifImageSourceValue,
        Optional<AtifAudioSource> atifAudioSourceValue,
        Optional<UnknownArm> unknownValue)
    {
        _atifImageSourceValue = atifImageSourceValue;
        _atifAudioSourceValue = atifAudioSourceValue;
        _unknownValue = unknownValue;
    }

    public static Source11 AtifImageSource(AtifImageSource value) =>
        new(Optional<AtifImageSource>.Some(value), default, default);

    public static Source11 AtifAudioSource(AtifAudioSource value) =>
        new(default, Optional<AtifAudioSource>.Some(value), default);

    internal static Source11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAtifImageSource([NotNullWhen(true)] out AtifImageSource? value) =>
        _atifImageSourceValue.TryGetValue(out value);

    public bool TryGetAtifAudioSource([NotNullWhen(true)] out AtifAudioSource? value) =>
        _atifAudioSourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Source11(AtifImageSource value) => AtifImageSource(value);

    public static implicit operator Source11(AtifAudioSource value) => AtifAudioSource(value);

    public TResult Match<TResult>(Func<AtifImageSource, TResult> onAtifImageSource,
        Func<AtifAudioSource, TResult> onAtifAudioSource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAtifImageSource(out var atifImageSourceValue) => onAtifImageSource(atifImageSourceValue),
            _ when TryGetAtifAudioSource(out var atifAudioSourceValue) => onAtifAudioSource(atifAudioSourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Source11)} holds no value.")
        };

    public void Match(Action<AtifImageSource> onAtifImageSource,
        Action<AtifAudioSource> onAtifAudioSource,
        Action<JsonElement> otherwise)
    {
        if (TryGetAtifImageSource(out var atifImageSourceValue)) onAtifImageSource(atifImageSourceValue);
        else if (TryGetAtifAudioSource(out var atifAudioSourceValue)) onAtifAudioSource(atifAudioSourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Source11)} holds no value.");
    }
}

file sealed class Source11Converter : JsonConverter<Source11>
{
    public override Source11 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AtifImageSource>(root, options, out var atifImageSourceValue))
        {
            return Source11.AtifImageSource(atifImageSourceValue);
        }
        if (JsonSerializer.TryDeserialize<AtifAudioSource>(root, options, out var atifAudioSourceValue))
        {
            return Source11.AtifAudioSource(atifAudioSourceValue);
        }
        return Source11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Source11 value, JsonSerializerOptions options)
    {
        if (value.TryGetAtifImageSource(out var atifImageSourceValue))
        {
            JsonSerializer.Serialize(writer, atifImageSourceValue, options);
        }
        else if (value.TryGetAtifAudioSource(out var atifAudioSourceValue))
        {
            JsonSerializer.Serialize(writer, atifAudioSourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Source11)} contains no valid value to serialize.");
        }
    }
}
