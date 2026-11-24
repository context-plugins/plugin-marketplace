using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_runner_state.
/// </summary>
[JsonConverter(typeof(PipelineRunnerStateConverter))]
public record PipelineRunnerState
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRunnerStateProperties PipelineRunnerStateProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineRunnerStateProperties pipelineRunnerStateProperties)
    {
        objectModel = ObjectModel;
        pipelineRunnerStateProperties = PipelineRunnerStateProperties;
    }

    public static implicit operator ObjectModel(PipelineRunnerState value) => value.ObjectModel;

    public static implicit operator PipelineRunnerStateProperties(PipelineRunnerState value) =>
        value.PipelineRunnerStateProperties;
}

file class PipelineRunnerStateConverter : JsonConverter<PipelineRunnerState>
{
    public override PipelineRunnerState Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRunnerStateProperties = root.Deserialize<PipelineRunnerStateProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRunnerStateProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRunnerStateProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRunnerStateProperties.AdditionalProperties.Clear();
        return new PipelineRunnerState
        {
            ObjectModel = objectModel,
            PipelineRunnerStateProperties = pipelineRunnerStateProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRunnerState value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineRunnerStateProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
