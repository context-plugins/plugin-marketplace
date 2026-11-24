using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ByokScope1Converter))]
public record ByokScope1
{
    private readonly Optional<ByokScope> _byokScopeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ByokScope1(Optional<ByokScope> byokScopeValue, Optional<UnknownArm> unknownValue)
    {
        _byokScopeValue = byokScopeValue;
        _unknownValue = unknownValue;
    }

    public static ByokScope1 ByokScope(ByokScope value) => new(Optional<ByokScope>.Some(value), default);

    internal static ByokScope1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetByokScope([NotNullWhen(true)] out ByokScope? value) => _byokScopeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ByokScope1(ByokScope value) => ByokScope(value);

    public TResult Match<TResult>(Func<ByokScope, TResult> onByokScope, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetByokScope(out var byokScopeValue) => onByokScope(byokScopeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ByokScope1)} holds no value.")
        };

    public void Match(Action<ByokScope> onByokScope, Action<JsonElement> otherwise)
    {
        if (TryGetByokScope(out var byokScopeValue)) onByokScope(byokScopeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ByokScope1)} holds no value.");
    }
}

file sealed class ByokScope1Converter : JsonConverter<ByokScope1>
{
    public override ByokScope1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ByokScope>(root, options, out var byokScopeValue))
        {
            return ByokScope1.ByokScope(byokScopeValue);
        }
        return ByokScope1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ByokScope1 value, JsonSerializerOptions options)
    {
        if (value.TryGetByokScope(out var byokScopeValue))
        {
            JsonSerializer.Serialize(writer, byokScopeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ByokScope1)} contains no valid value to serialize.");
        }
    }
}
