using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Custom proxy settings to use for the session. If not provided, our proxies will be used.
/// </summary>
[JsonConverter(typeof(CustomProxyConverter))]
public record CustomProxy
{
    private readonly Optional<CustomProxyModel> _customProxyModelValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CustomProxy(Optional<CustomProxyModel> customProxyModelValue, Optional<UnknownArm> unknownValue)
    {
        _customProxyModelValue = customProxyModelValue;
        _unknownValue = unknownValue;
    }

    public static CustomProxy CustomProxyModel(CustomProxyModel value) =>
        new(Optional<CustomProxyModel>.Some(value), default);

    internal static CustomProxy Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCustomProxyModel([NotNullWhen(true)] out CustomProxyModel? value) =>
        _customProxyModelValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CustomProxy(CustomProxyModel value) => CustomProxyModel(value);

    public TResult Match<TResult>(Func<CustomProxyModel, TResult> onCustomProxyModel,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCustomProxyModel(out var customProxyModelValue) => onCustomProxyModel(customProxyModelValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CustomProxy)} holds no value.")
        };

    public void Match(Action<CustomProxyModel> onCustomProxyModel, Action<JsonElement> otherwise)
    {
        if (TryGetCustomProxyModel(out var customProxyModelValue)) onCustomProxyModel(customProxyModelValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CustomProxy)} holds no value.");
    }
}

file sealed class CustomProxyConverter : JsonConverter<CustomProxy>
{
    public override CustomProxy Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CustomProxyModel>(root, options, out var customProxyModelValue))
        {
            return CustomProxy.CustomProxyModel(customProxyModelValue);
        }
        return CustomProxy.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CustomProxy value, JsonSerializerOptions options)
    {
        if (value.TryGetCustomProxyModel(out var customProxyModelValue))
        {
            JsonSerializer.Serialize(writer, customProxyModelValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CustomProxy)} contains no valid value to serialize.");
        }
    }
}
