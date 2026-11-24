using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_cache.
/// </summary>
[JsonConverter(typeof(PipelineCacheConverter))]
public record PipelineCache
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineCacheProperties PipelineCacheProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineCacheProperties pipelineCacheProperties)
    {
        objectModel = ObjectModel;
        pipelineCacheProperties = PipelineCacheProperties;
    }

    public static implicit operator ObjectModel(PipelineCache value) => value.ObjectModel;

    public static implicit operator PipelineCacheProperties(PipelineCache value) => value.PipelineCacheProperties;
}

file class PipelineCacheConverter : JsonConverter<PipelineCache>
{
    public override PipelineCache Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineCacheProperties = root.Deserialize<PipelineCacheProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineCacheProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineCacheProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineCacheProperties.AdditionalProperties.Clear();
        return new PipelineCache
        {
            ObjectModel = objectModel,
            PipelineCacheProperties = pipelineCacheProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineCache value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineCacheProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
