using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(SourceAccess1Converter))]
public record SourceAccess1
{
    private readonly Optional<SourceAccess> _sourceAccessValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SourceAccess1(Optional<SourceAccess> sourceAccessValue, Optional<UnknownArm> unknownValue)
    {
        _sourceAccessValue = sourceAccessValue;
        _unknownValue = unknownValue;
    }

    public static SourceAccess1 SourceAccess(SourceAccess value) => new(Optional<SourceAccess>.Some(value), default);

    internal static SourceAccess1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSourceAccess([NotNullWhen(true)] out SourceAccess? value) =>
        _sourceAccessValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SourceAccess1(SourceAccess value) => SourceAccess(value);

    public TResult Match<TResult>(Func<SourceAccess, TResult> onSourceAccess, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSourceAccess(out var sourceAccessValue) => onSourceAccess(sourceAccessValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SourceAccess1)} holds no value.")
        };

    public void Match(Action<SourceAccess> onSourceAccess, Action<JsonElement> otherwise)
    {
        if (TryGetSourceAccess(out var sourceAccessValue)) onSourceAccess(sourceAccessValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SourceAccess1)} holds no value.");
    }
}

file sealed class SourceAccess1Converter : JsonConverter<SourceAccess1>
{
    public override SourceAccess1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SourceAccess>(root, options, out var sourceAccessValue))
        {
            return SourceAccess1.SourceAccess(sourceAccessValue);
        }
        return SourceAccess1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SourceAccess1 value, JsonSerializerOptions options)
    {
        if (value.TryGetSourceAccess(out var sourceAccessValue))
        {
            JsonSerializer.Serialize(writer, sourceAccessValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SourceAccess1)} contains no valid value to serialize.");
        }
    }
}
