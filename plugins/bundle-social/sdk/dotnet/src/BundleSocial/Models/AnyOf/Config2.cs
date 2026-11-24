using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Extensions;
using BundleSocial.Core.Models;

namespace BundleSocial.Models.AnyOf;

[JsonConverter(typeof(Config2Converter))]
public record Config2
{
    private readonly Optional<Config> _configValue;

    private readonly Optional<Config1> _config1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Config2(Optional<Config> configValue, Optional<Config1> config1Value, Optional<UnknownArm> unknownValue)
    {
        _configValue = configValue;
        _config1Value = config1Value;
        _unknownValue = unknownValue;
    }

    public static Config2 Config(Config value) => new(Optional<Config>.Some(value), default, default);

    public static Config2 Config1(Config1 value) => new(default, Optional<Config1>.Some(value), default);

    internal static Config2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetConfig([NotNullWhen(true)] out Config? value) => _configValue.TryGetValue(out value);

    public bool TryGetConfig1([NotNullWhen(true)] out Config1? value) => _config1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Config2(Config value) => Config(value);

    public static implicit operator Config2(Config1 value) => Config1(value);

    public TResult Match<TResult>(Func<Config, TResult> onConfig,
        Func<Config1, TResult> onConfig1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetConfig(out var configValue) => onConfig(configValue),
            _ when TryGetConfig1(out var config1Value) => onConfig1(config1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Config2)} holds no value.")
        };

    public void Match(Action<Config> onConfig, Action<Config1> onConfig1, Action<JsonElement> otherwise)
    {
        if (TryGetConfig(out var configValue)) onConfig(configValue);
        else if (TryGetConfig1(out var config1Value)) onConfig1(config1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Config2)} holds no value.");
    }
}

file sealed class Config2Converter : JsonConverter<Config2>
{
    public override Config2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Config>(root, options, out var configValue))
        {
            return Config2.Config(configValue);
        }
        if (JsonSerializer.TryDeserialize<Config1>(root, options, out var config1Value))
        {
            return Config2.Config1(config1Value);
        }
        return Config2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Config2 value, JsonSerializerOptions options)
    {
        if (value.TryGetConfig(out var configValue))
        {
            JsonSerializer.Serialize(writer, configValue, options);
        }
        else if (value.TryGetConfig1(out var config1Value))
        {
            JsonSerializer.Serialize(writer, config1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Config2)} contains no valid value to serialize.");
        }
    }
}
