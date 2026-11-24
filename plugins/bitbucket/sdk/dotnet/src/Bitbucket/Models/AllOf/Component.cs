using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, component.
/// </summary>
[JsonConverter(typeof(ComponentConverter))]
public record Component
{
    public required ObjectModel ObjectModel { get; init; }

    public required ComponentProperties ComponentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out ComponentProperties componentProperties)
    {
        objectModel = ObjectModel;
        componentProperties = ComponentProperties;
    }

    public static implicit operator ObjectModel(Component value) => value.ObjectModel;

    public static implicit operator ComponentProperties(Component value) => value.ComponentProperties;
}

file class ComponentConverter : JsonConverter<Component>
{
    public override Component Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var componentProperties = root.Deserialize<ComponentProperties>(options) ??
            throw new JsonException("Failed to deserialize ComponentProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, componentProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        componentProperties.AdditionalProperties.Clear();
        return new Component
        {
            ObjectModel = objectModel,
            ComponentProperties = componentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Component value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ComponentProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
