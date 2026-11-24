using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipelines_links_section_href3.
/// </summary>
[JsonConverter(typeof(PipelinesLinksSectionHref3Converter))]
public record PipelinesLinksSectionHref3
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelinesLinksSectionHref3Properties PipelinesLinksSectionHref3Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelinesLinksSectionHref3Properties pipelinesLinksSectionHref3Properties)
    {
        objectModel = ObjectModel;
        pipelinesLinksSectionHref3Properties = PipelinesLinksSectionHref3Properties;
    }

    public static implicit operator ObjectModel(PipelinesLinksSectionHref3 value) => value.ObjectModel;

    public static implicit operator PipelinesLinksSectionHref3Properties(PipelinesLinksSectionHref3 value) =>
        value.PipelinesLinksSectionHref3Properties;
}

file class PipelinesLinksSectionHref3Converter : JsonConverter<PipelinesLinksSectionHref3>
{
    public override PipelinesLinksSectionHref3 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelinesLinksSectionHref3Properties = root.Deserialize<PipelinesLinksSectionHref3Properties>(options) ??
            throw new JsonException("Failed to deserialize PipelinesLinksSectionHref3Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelinesLinksSectionHref3Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelinesLinksSectionHref3Properties.AdditionalProperties.Clear();
        return new PipelinesLinksSectionHref3
        {
            ObjectModel = objectModel,
            PipelinesLinksSectionHref3Properties = pipelinesLinksSectionHref3Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelinesLinksSectionHref3 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelinesLinksSectionHref3Properties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
