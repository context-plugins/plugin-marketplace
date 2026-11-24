using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_runner_version2.
/// </summary>
[JsonConverter(typeof(PipelineRunnerVersion2Converter))]
public record PipelineRunnerVersion2
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRunnerVersion2Properties PipelineRunnerVersion2Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineRunnerVersion2Properties pipelineRunnerVersion2Properties)
    {
        objectModel = ObjectModel;
        pipelineRunnerVersion2Properties = PipelineRunnerVersion2Properties;
    }

    public static implicit operator ObjectModel(PipelineRunnerVersion2 value) => value.ObjectModel;

    public static implicit operator PipelineRunnerVersion2Properties(PipelineRunnerVersion2 value) =>
        value.PipelineRunnerVersion2Properties;
}

file class PipelineRunnerVersion2Converter : JsonConverter<PipelineRunnerVersion2>
{
    public override PipelineRunnerVersion2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRunnerVersion2Properties = root.Deserialize<PipelineRunnerVersion2Properties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRunnerVersion2Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRunnerVersion2Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRunnerVersion2Properties.AdditionalProperties.Clear();
        return new PipelineRunnerVersion2
        {
            ObjectModel = objectModel,
            PipelineRunnerVersion2Properties = pipelineRunnerVersion2Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRunnerVersion2 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineRunnerVersion2Properties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
