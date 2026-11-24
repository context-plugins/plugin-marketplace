using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipelines_pipeline_links.
/// </summary>
[JsonConverter(typeof(PipelinesPipelineLinksConverter))]
public record PipelinesPipelineLinks
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelinesPipelineLinksProperties PipelinesPipelineLinksProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelinesPipelineLinksProperties pipelinesPipelineLinksProperties)
    {
        objectModel = ObjectModel;
        pipelinesPipelineLinksProperties = PipelinesPipelineLinksProperties;
    }

    public static implicit operator ObjectModel(PipelinesPipelineLinks value) => value.ObjectModel;

    public static implicit operator PipelinesPipelineLinksProperties(PipelinesPipelineLinks value) =>
        value.PipelinesPipelineLinksProperties;
}

file class PipelinesPipelineLinksConverter : JsonConverter<PipelinesPipelineLinks>
{
    public override PipelinesPipelineLinks Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelinesPipelineLinksProperties = root.Deserialize<PipelinesPipelineLinksProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelinesPipelineLinksProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelinesPipelineLinksProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelinesPipelineLinksProperties.AdditionalProperties.Clear();
        return new PipelinesPipelineLinks
        {
            ObjectModel = objectModel,
            PipelinesPipelineLinksProperties = pipelinesPipelineLinksProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelinesPipelineLinks value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelinesPipelineLinksProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
