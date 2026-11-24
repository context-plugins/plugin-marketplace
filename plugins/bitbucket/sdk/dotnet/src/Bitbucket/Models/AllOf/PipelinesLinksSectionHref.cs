using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipelines_links_section_href.
/// </summary>
[JsonConverter(typeof(PipelinesLinksSectionHrefConverter))]
public record PipelinesLinksSectionHref
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelinesLinksSectionHrefProperties PipelinesLinksSectionHrefProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelinesLinksSectionHrefProperties pipelinesLinksSectionHrefProperties)
    {
        objectModel = ObjectModel;
        pipelinesLinksSectionHrefProperties = PipelinesLinksSectionHrefProperties;
    }

    public static implicit operator ObjectModel(PipelinesLinksSectionHref value) => value.ObjectModel;

    public static implicit operator PipelinesLinksSectionHrefProperties(PipelinesLinksSectionHref value) =>
        value.PipelinesLinksSectionHrefProperties;
}

file class PipelinesLinksSectionHrefConverter : JsonConverter<PipelinesLinksSectionHref>
{
    public override PipelinesLinksSectionHref Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelinesLinksSectionHrefProperties = root.Deserialize<PipelinesLinksSectionHrefProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelinesLinksSectionHrefProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelinesLinksSectionHrefProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelinesLinksSectionHrefProperties.AdditionalProperties.Clear();
        return new PipelinesLinksSectionHref
        {
            ObjectModel = objectModel,
            PipelinesLinksSectionHrefProperties = pipelinesLinksSectionHrefProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelinesLinksSectionHref value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelinesLinksSectionHrefProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
