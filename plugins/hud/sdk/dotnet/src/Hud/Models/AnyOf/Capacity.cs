using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

/// <summary>
/// Hosted rollout capacity, on serving global models in signed-in list responses. Null otherwise, or while no scheduler pass has run recently.
/// </summary>
[JsonConverter(typeof(CapacityConverter))]
public record Capacity
{
    private readonly Optional<ModelCapacity> _modelCapacityValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Capacity(Optional<ModelCapacity> modelCapacityValue, Optional<UnknownArm> unknownValue)
    {
        _modelCapacityValue = modelCapacityValue;
        _unknownValue = unknownValue;
    }

    public static Capacity ModelCapacity(ModelCapacity value) => new(Optional<ModelCapacity>.Some(value), default);

    internal static Capacity Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetModelCapacity([NotNullWhen(true)] out ModelCapacity? value) =>
        _modelCapacityValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Capacity(ModelCapacity value) => ModelCapacity(value);

    public TResult Match<TResult>(Func<ModelCapacity, TResult> onModelCapacity, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetModelCapacity(out var modelCapacityValue) => onModelCapacity(modelCapacityValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Capacity)} holds no value.")
        };

    public void Match(Action<ModelCapacity> onModelCapacity, Action<JsonElement> otherwise)
    {
        if (TryGetModelCapacity(out var modelCapacityValue)) onModelCapacity(modelCapacityValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Capacity)} holds no value.");
    }
}

file sealed class CapacityConverter : JsonConverter<Capacity>
{
    public override Capacity Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ModelCapacity>(root, options, out var modelCapacityValue))
        {
            return Capacity.ModelCapacity(modelCapacityValue);
        }
        return Capacity.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Capacity value, JsonSerializerOptions options)
    {
        if (value.TryGetModelCapacity(out var modelCapacityValue))
        {
            JsonSerializer.Serialize(writer, modelCapacityValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Capacity)} contains no valid value to serialize.");
        }
    }
}
