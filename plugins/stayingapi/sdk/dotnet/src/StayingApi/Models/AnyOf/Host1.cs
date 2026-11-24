using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using StayingApi.Core.Extensions;
using StayingApi.Core.Models;

namespace StayingApi.Models.AnyOf;

[JsonConverter(typeof(Host1Converter))]
public record Host1
{
    private readonly Optional<Host> _hostValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Host1(Optional<Host> hostValue, Optional<UnknownArm> unknownValue)
    {
        _hostValue = hostValue;
        _unknownValue = unknownValue;
    }

    public static Host1 Host(Host value) => new(Optional<Host>.Some(value), default);

    internal static Host1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetHost([NotNullWhen(true)] out Host? value) => _hostValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Host1(Host value) => Host(value);

    public TResult Match<TResult>(Func<Host, TResult> onHost, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHost(out var hostValue) => onHost(hostValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Host1)} holds no value.")
        };

    public void Match(Action<Host> onHost, Action<JsonElement> otherwise)
    {
        if (TryGetHost(out var hostValue)) onHost(hostValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Host1)} holds no value.");
    }
}

file sealed class Host1Converter : JsonConverter<Host1>
{
    public override Host1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Host>(root, options, out var hostValue))
        {
            return Host1.Host(hostValue);
        }
        return Host1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Host1 value, JsonSerializerOptions options)
    {
        if (value.TryGetHost(out var hostValue))
        {
            JsonSerializer.Serialize(writer, hostValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Host1)} contains no valid value to serialize.");
        }
    }
}
