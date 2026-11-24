using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(IconsConverter))]
public record Icons
{
    private readonly Optional<IReadOnlyList<Icon>> _listOfIconValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Icons(Optional<IReadOnlyList<Icon>> listOfIconValue, Optional<UnknownArm> unknownValue)
    {
        _listOfIconValue = listOfIconValue;
        _unknownValue = unknownValue;
    }

    public static Icons ListOfIcon(IReadOnlyList<Icon> value) =>
        new(Optional<IReadOnlyList<Icon>>.Some(value), default);

    internal static Icons Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfIcon([NotNullWhen(true)] out IReadOnlyList<Icon>? value) =>
        _listOfIconValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<Icon>, TResult> onListOfIcon,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfIcon(out var listOfIconValue) => onListOfIcon(listOfIconValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Icons)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Icon>> onListOfIcon, Action<JsonElement> otherwise)
    {
        if (TryGetListOfIcon(out var listOfIconValue)) onListOfIcon(listOfIconValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Icons)} holds no value.");
    }
}

file sealed class IconsConverter : JsonConverter<Icons>
{
    public override Icons Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Icon>>(root, options, out var listOfIconValue))
        {
            return Icons.ListOfIcon(listOfIconValue);
        }
        return Icons.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Icons value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfIcon(out var listOfIconValue))
        {
            JsonSerializer.Serialize(writer, listOfIconValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Icons)} contains no valid value to serialize.");
        }
    }
}
