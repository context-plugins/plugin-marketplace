using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_step.
/// </summary>
[JsonConverter(typeof(PipelineStepConverter))]
public record PipelineStep
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineStepProperties PipelineStepProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineStepProperties pipelineStepProperties)
    {
        objectModel = ObjectModel;
        pipelineStepProperties = PipelineStepProperties;
    }

    public static implicit operator ObjectModel(PipelineStep value) => value.ObjectModel;

    public static implicit operator PipelineStepProperties(PipelineStep value) => value.PipelineStepProperties;
}

file class PipelineStepConverter : JsonConverter<PipelineStep>
{
    public override PipelineStep Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineStepProperties = root.Deserialize<PipelineStepProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineStepProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineStepProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineStepProperties.AdditionalProperties.Clear();
        return new PipelineStep
        {
            ObjectModel = objectModel,
            PipelineStepProperties = pipelineStepProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineStep value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineStepProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
