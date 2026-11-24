using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(BuildArgsConverter))]
public record BuildArgs
{
    private readonly Optional<IReadOnlyDictionary<string, string>> _mapOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private BuildArgs(Optional<IReadOnlyDictionary<string, string>> mapOfStringValue, Optional<UnknownArm> unknownValue)
    {
        _mapOfStringValue = mapOfStringValue;
        _unknownValue = unknownValue;
    }

    public static BuildArgs MapOfString(IReadOnlyDictionary<string, string> value) =>
        new(Optional<IReadOnlyDictionary<string, string>>.Some(value), default);

    internal static BuildArgs Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfString([NotNullWhen(true)] out IReadOnlyDictionary<string, string>? value) =>
        _mapOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, string>, TResult> onMapOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfString(out var mapOfStringValue) => onMapOfString(mapOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(BuildArgs)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, string>> onMapOfString, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfString(out var mapOfStringValue)) onMapOfString(mapOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(BuildArgs)} holds no value.");
    }
}

file sealed class BuildArgsConverter : JsonConverter<BuildArgs>
{
    public override BuildArgs Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, string>>(root, options, out var mapOfStringValue))
        {
            return BuildArgs.MapOfString(mapOfStringValue);
        }
        return BuildArgs.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, BuildArgs value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfString(out var mapOfStringValue))
        {
            JsonSerializer.Serialize(writer, mapOfStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(BuildArgs)} contains no valid value to serialize.");
        }
    }
}
