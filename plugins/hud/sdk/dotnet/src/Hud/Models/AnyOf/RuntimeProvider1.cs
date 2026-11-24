using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(RuntimeProvider1Converter))]
public record RuntimeProvider1
{
    private readonly Optional<RuntimeProvider> _runtimeProviderValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private RuntimeProvider1(Optional<RuntimeProvider> runtimeProviderValue, Optional<UnknownArm> unknownValue)
    {
        _runtimeProviderValue = runtimeProviderValue;
        _unknownValue = unknownValue;
    }

    public static RuntimeProvider1 RuntimeProvider(RuntimeProvider value) =>
        new(Optional<RuntimeProvider>.Some(value), default);

    internal static RuntimeProvider1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRuntimeProvider([NotNullWhen(true)] out RuntimeProvider? value) =>
        _runtimeProviderValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator RuntimeProvider1(RuntimeProvider value) => RuntimeProvider(value);

    public TResult Match<TResult>(Func<RuntimeProvider, TResult> onRuntimeProvider,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRuntimeProvider(out var runtimeProviderValue) => onRuntimeProvider(runtimeProviderValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(RuntimeProvider1)} holds no value.")
        };

    public void Match(Action<RuntimeProvider> onRuntimeProvider, Action<JsonElement> otherwise)
    {
        if (TryGetRuntimeProvider(out var runtimeProviderValue)) onRuntimeProvider(runtimeProviderValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(RuntimeProvider1)} holds no value.");
    }
}

file sealed class RuntimeProvider1Converter : JsonConverter<RuntimeProvider1>
{
    public override RuntimeProvider1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RuntimeProvider>(root, options, out var runtimeProviderValue))
        {
            return RuntimeProvider1.RuntimeProvider(runtimeProviderValue);
        }
        return RuntimeProvider1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, RuntimeProvider1 value, JsonSerializerOptions options)
    {
        if (value.TryGetRuntimeProvider(out var runtimeProviderValue))
        {
            JsonSerializer.Serialize(writer, runtimeProviderValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(RuntimeProvider1)} contains no valid value to serialize.");
        }
    }
}
