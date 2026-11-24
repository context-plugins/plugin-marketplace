using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_runner.
/// </summary>
[JsonConverter(typeof(PipelineRunnerConverter))]
public record PipelineRunner
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRunnerProperties PipelineRunnerProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineRunnerProperties pipelineRunnerProperties)
    {
        objectModel = ObjectModel;
        pipelineRunnerProperties = PipelineRunnerProperties;
    }

    public static implicit operator ObjectModel(PipelineRunner value) => value.ObjectModel;

    public static implicit operator PipelineRunnerProperties(PipelineRunner value) => value.PipelineRunnerProperties;
}

file class PipelineRunnerConverter : JsonConverter<PipelineRunner>
{
    public override PipelineRunner Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRunnerProperties = root.Deserialize<PipelineRunnerProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRunnerProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRunnerProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRunnerProperties.AdditionalProperties.Clear();
        return new PipelineRunner
        {
            ObjectModel = objectModel,
            PipelineRunnerProperties = pipelineRunnerProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRunner value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineRunnerProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
