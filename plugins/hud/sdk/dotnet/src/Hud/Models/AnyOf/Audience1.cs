using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Audience1Converter))]
public record Audience1
{
    private readonly Optional<IReadOnlyList<Audience>> _listOfAudienceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Audience1(Optional<IReadOnlyList<Audience>> listOfAudienceValue, Optional<UnknownArm> unknownValue)
    {
        _listOfAudienceValue = listOfAudienceValue;
        _unknownValue = unknownValue;
    }

    public static Audience1 ListOfAudience(IReadOnlyList<Audience> value) =>
        new(Optional<IReadOnlyList<Audience>>.Some(value), default);

    internal static Audience1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfAudience([NotNullWhen(true)] out IReadOnlyList<Audience>? value) =>
        _listOfAudienceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<Audience>, TResult> onListOfAudience,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfAudience(out var listOfAudienceValue) => onListOfAudience(listOfAudienceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Audience1)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Audience>> onListOfAudience, Action<JsonElement> otherwise)
    {
        if (TryGetListOfAudience(out var listOfAudienceValue)) onListOfAudience(listOfAudienceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Audience1)} holds no value.");
    }
}

file sealed class Audience1Converter : JsonConverter<Audience1>
{
    public override Audience1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Audience>>(root, options, out var listOfAudienceValue))
        {
            return Audience1.ListOfAudience(listOfAudienceValue);
        }
        return Audience1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Audience1 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfAudience(out var listOfAudienceValue))
        {
            JsonSerializer.Serialize(writer, listOfAudienceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Audience1)} contains no valid value to serialize.");
        }
    }
}
