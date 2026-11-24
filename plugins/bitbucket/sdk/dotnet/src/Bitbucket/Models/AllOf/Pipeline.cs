using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline.
/// </summary>
[JsonConverter(typeof(PipelineConverter))]
public record Pipeline
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineProperties PipelineProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineProperties pipelineProperties)
    {
        objectModel = ObjectModel;
        pipelineProperties = PipelineProperties;
    }

    public static implicit operator ObjectModel(Pipeline value) => value.ObjectModel;

    public static implicit operator PipelineProperties(Pipeline value) => value.PipelineProperties;
}

file class PipelineConverter : JsonConverter<Pipeline>
{
    public override Pipeline Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineProperties = root.Deserialize<PipelineProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, pipelineProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineProperties.AdditionalProperties.Clear();
        return new Pipeline
        {
            ObjectModel = objectModel,
            PipelineProperties = pipelineProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Pipeline value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
