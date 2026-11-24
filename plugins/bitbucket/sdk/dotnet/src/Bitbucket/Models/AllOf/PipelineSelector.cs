using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_selector.
/// </summary>
[JsonConverter(typeof(PipelineSelectorConverter))]
public record PipelineSelector
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineSelectorProperties PipelineSelectorProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineSelectorProperties pipelineSelectorProperties)
    {
        objectModel = ObjectModel;
        pipelineSelectorProperties = PipelineSelectorProperties;
    }

    public static implicit operator ObjectModel(PipelineSelector value) => value.ObjectModel;

    public static implicit operator PipelineSelectorProperties(PipelineSelector value) =>
        value.PipelineSelectorProperties;
}

file class PipelineSelectorConverter : JsonConverter<PipelineSelector>
{
    public override PipelineSelector Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineSelectorProperties = root.Deserialize<PipelineSelectorProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineSelectorProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineSelectorProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineSelectorProperties.AdditionalProperties.Clear();
        return new PipelineSelector
        {
            ObjectModel = objectModel,
            PipelineSelectorProperties = pipelineSelectorProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineSelector value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineSelectorProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
