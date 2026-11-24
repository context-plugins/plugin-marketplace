using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_ref_target1.
/// </summary>
[JsonConverter(typeof(PipelineRefTarget1Converter))]
public record PipelineRefTarget1
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRefTarget1Properties PipelineRefTarget1Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineRefTarget1Properties pipelineRefTarget1Properties)
    {
        objectModel = ObjectModel;
        pipelineRefTarget1Properties = PipelineRefTarget1Properties;
    }

    public static implicit operator ObjectModel(PipelineRefTarget1 value) => value.ObjectModel;

    public static implicit operator PipelineRefTarget1Properties(PipelineRefTarget1 value) =>
        value.PipelineRefTarget1Properties;
}

file class PipelineRefTarget1Converter : JsonConverter<PipelineRefTarget1>
{
    public override PipelineRefTarget1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRefTarget1Properties = root.Deserialize<PipelineRefTarget1Properties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRefTarget1Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRefTarget1Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRefTarget1Properties.AdditionalProperties.Clear();
        return new PipelineRefTarget1
        {
            ObjectModel = objectModel,
            PipelineRefTarget1Properties = pipelineRefTarget1Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRefTarget1 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineRefTarget1Properties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
