using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Optional provider-native request parameters for the selected model, written with the provider's own field names and values and forwarded unchanged (e.g. {"reasoning": {"effort": "high"}} for OpenAI, {"thinking": {"type": "adaptive"}} for Anthropic, {"thinkingConfig": {"thinkingLevel": "high"}} for Google). Supported paths and values are per-model; an unsupported path, value, or a model that accepts no parameters at all is rejected with 422. Omitting this field applies the model's default parameters (gpt-6-luna defaults to {"reasoning": {"effort": "high"}}); passing {} opts out of that default and leaves the provider's own defaults in place.
/// </summary>
[JsonConverter(typeof(Modelparams1Converter))]
public record Modelparams1
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Modelparams1(Optional<object> anonymousObjectValue, Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static Modelparams1 AnonymousObject(object value) => new(Optional<object>.Some(value), default);

    internal static Modelparams1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Modelparams1)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Modelparams1)} holds no value.");
    }
}

file sealed class Modelparams1Converter : JsonConverter<Modelparams1>
{
    public override Modelparams1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return Modelparams1.AnonymousObject(anonymousObjectValue);
        }
        return Modelparams1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Modelparams1 value, JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Modelparams1)} contains no valid value to serialize.");
        }
    }
}
