using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DoiT.Core.Extensions;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models.AnyOf;

/// <summary>
/// Template type or array of template layer IDs to include.
/// </summary>
[JsonConverter(typeof(Template1Converter))]
public record Template1
{
    private readonly Optional<Template> _templateValue;

    private readonly Optional<IReadOnlyList<string>> _listOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Template1(Optional<Template> templateValue,
        Optional<IReadOnlyList<string>> listOfStringValue,
        Optional<UnknownArm> unknownValue)
    {
        _templateValue = templateValue;
        _listOfStringValue = listOfStringValue;
        _unknownValue = unknownValue;
    }

    public static Template1 Template(Template value) => new(Optional<Template>.Some(value), default, default);

    public static Template1 ListOfString(IReadOnlyList<string> value) =>
        new(default, Optional<IReadOnlyList<string>>.Some(value), default);

    internal static Template1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTemplate([NotNullWhen(true)] out Template? value) => _templateValue.TryGetValue(out value);

    public bool TryGetListOfString([NotNullWhen(true)] out IReadOnlyList<string>? value) =>
        _listOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Template1(Template value) => Template(value);

    public TResult Match<TResult>(Func<Template, TResult> onTemplate,
        Func<IReadOnlyList<string>, TResult> onListOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTemplate(out var templateValue) => onTemplate(templateValue),
            _ when TryGetListOfString(out var listOfStringValue) => onListOfString(listOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Template1)} holds no value.")
        };

    public void Match(Action<Template> onTemplate,
        Action<IReadOnlyList<string>> onListOfString,
        Action<JsonElement> otherwise)
    {
        if (TryGetTemplate(out var templateValue)) onTemplate(templateValue);
        else if (TryGetListOfString(out var listOfStringValue)) onListOfString(listOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Template1)} holds no value.");
    }
}

file sealed class Template1Converter : JsonConverter<Template1>
{
    public override Template1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Template>(root, options, out var templateValue))
        {
            return Template1.Template(templateValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<string>>(root, options, out var listOfStringValue))
        {
            return Template1.ListOfString(listOfStringValue);
        }
        return Template1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Template1 value, JsonSerializerOptions options)
    {
        if (value.TryGetTemplate(out var templateValue))
        {
            JsonSerializer.Serialize(writer, templateValue, options);
        }
        else if (value.TryGetListOfString(out var listOfStringValue))
        {
            JsonSerializer.Serialize(writer, listOfStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Template1)} contains no valid value to serialize.");
        }
    }
}
