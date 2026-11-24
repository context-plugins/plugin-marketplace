using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_ref_target.
/// </summary>
[JsonConverter(typeof(PipelineRefTargetConverter))]
public record PipelineRefTarget
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRefTargetProperties PipelineRefTargetProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineRefTargetProperties pipelineRefTargetProperties)
    {
        objectModel = ObjectModel;
        pipelineRefTargetProperties = PipelineRefTargetProperties;
    }

    public static implicit operator ObjectModel(PipelineRefTarget value) => value.ObjectModel;

    public static implicit operator PipelineRefTargetProperties(PipelineRefTarget value) =>
        value.PipelineRefTargetProperties;
}

file class PipelineRefTargetConverter : JsonConverter<PipelineRefTarget>
{
    public override PipelineRefTarget Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRefTargetProperties = root.Deserialize<PipelineRefTargetProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRefTargetProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRefTargetProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRefTargetProperties.AdditionalProperties.Clear();
        return new PipelineRefTarget
        {
            ObjectModel = objectModel,
            PipelineRefTargetProperties = pipelineRefTargetProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRefTarget value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineRefTargetProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
