using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipelines_links_section_href1.
/// </summary>
[JsonConverter(typeof(PipelinesLinksSectionHref1Converter))]
public record PipelinesLinksSectionHref1
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelinesLinksSectionHref1Properties PipelinesLinksSectionHref1Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelinesLinksSectionHref1Properties pipelinesLinksSectionHref1Properties)
    {
        objectModel = ObjectModel;
        pipelinesLinksSectionHref1Properties = PipelinesLinksSectionHref1Properties;
    }

    public static implicit operator ObjectModel(PipelinesLinksSectionHref1 value) => value.ObjectModel;

    public static implicit operator PipelinesLinksSectionHref1Properties(PipelinesLinksSectionHref1 value) =>
        value.PipelinesLinksSectionHref1Properties;
}

file class PipelinesLinksSectionHref1Converter : JsonConverter<PipelinesLinksSectionHref1>
{
    public override PipelinesLinksSectionHref1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelinesLinksSectionHref1Properties = root.Deserialize<PipelinesLinksSectionHref1Properties>(options) ??
            throw new JsonException("Failed to deserialize PipelinesLinksSectionHref1Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelinesLinksSectionHref1Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelinesLinksSectionHref1Properties.AdditionalProperties.Clear();
        return new PipelinesLinksSectionHref1
        {
            ObjectModel = objectModel,
            PipelinesLinksSectionHref1Properties = pipelinesLinksSectionHref1Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelinesLinksSectionHref1 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelinesLinksSectionHref1Properties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
