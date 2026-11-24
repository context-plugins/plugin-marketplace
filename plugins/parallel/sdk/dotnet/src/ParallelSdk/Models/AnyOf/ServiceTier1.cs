using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(ServiceTier1Converter))]
public record ServiceTier1
{
    private readonly Optional<ServiceTier> _serviceTierValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ServiceTier1(Optional<ServiceTier> serviceTierValue, Optional<UnknownArm> unknownValue)
    {
        _serviceTierValue = serviceTierValue;
        _unknownValue = unknownValue;
    }

    public static ServiceTier1 ServiceTier(ServiceTier value) => new(Optional<ServiceTier>.Some(value), default);

    internal static ServiceTier1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetServiceTier([NotNullWhen(true)] out ServiceTier? value) =>
        _serviceTierValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ServiceTier1(ServiceTier value) => ServiceTier(value);

    public TResult Match<TResult>(Func<ServiceTier, TResult> onServiceTier, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetServiceTier(out var serviceTierValue) => onServiceTier(serviceTierValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ServiceTier1)} holds no value.")
        };

    public void Match(Action<ServiceTier> onServiceTier, Action<JsonElement> otherwise)
    {
        if (TryGetServiceTier(out var serviceTierValue)) onServiceTier(serviceTierValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ServiceTier1)} holds no value.");
    }
}

file sealed class ServiceTier1Converter : JsonConverter<ServiceTier1>
{
    public override ServiceTier1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ServiceTier>(root, options, out var serviceTierValue))
        {
            return ServiceTier1.ServiceTier(serviceTierValue);
        }
        return ServiceTier1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ServiceTier1 value, JsonSerializerOptions options)
    {
        if (value.TryGetServiceTier(out var serviceTierValue))
        {
            JsonSerializer.Serialize(writer, serviceTierValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ServiceTier1)} contains no valid value to serialize.");
        }
    }
}
