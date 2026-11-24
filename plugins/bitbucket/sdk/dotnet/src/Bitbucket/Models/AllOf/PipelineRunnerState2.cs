using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_runner_state2.
/// </summary>
[JsonConverter(typeof(PipelineRunnerState2Converter))]
public record PipelineRunnerState2
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRunnerState2Properties PipelineRunnerState2Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineRunnerState2Properties pipelineRunnerState2Properties)
    {
        objectModel = ObjectModel;
        pipelineRunnerState2Properties = PipelineRunnerState2Properties;
    }

    public static implicit operator ObjectModel(PipelineRunnerState2 value) => value.ObjectModel;

    public static implicit operator PipelineRunnerState2Properties(PipelineRunnerState2 value) =>
        value.PipelineRunnerState2Properties;
}

file class PipelineRunnerState2Converter : JsonConverter<PipelineRunnerState2>
{
    public override PipelineRunnerState2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRunnerState2Properties = root.Deserialize<PipelineRunnerState2Properties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRunnerState2Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRunnerState2Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRunnerState2Properties.AdditionalProperties.Clear();
        return new PipelineRunnerState2
        {
            ObjectModel = objectModel,
            PipelineRunnerState2Properties = pipelineRunnerState2Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRunnerState2 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineRunnerState2Properties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
