using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_runner_version.
/// </summary>
[JsonConverter(typeof(PipelineRunnerVersionConverter))]
public record PipelineRunnerVersion
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRunnerVersionProperties PipelineRunnerVersionProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineRunnerVersionProperties pipelineRunnerVersionProperties)
    {
        objectModel = ObjectModel;
        pipelineRunnerVersionProperties = PipelineRunnerVersionProperties;
    }

    public static implicit operator ObjectModel(PipelineRunnerVersion value) => value.ObjectModel;

    public static implicit operator PipelineRunnerVersionProperties(PipelineRunnerVersion value) =>
        value.PipelineRunnerVersionProperties;
}

file class PipelineRunnerVersionConverter : JsonConverter<PipelineRunnerVersion>
{
    public override PipelineRunnerVersion Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRunnerVersionProperties = root.Deserialize<PipelineRunnerVersionProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRunnerVersionProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRunnerVersionProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRunnerVersionProperties.AdditionalProperties.Clear();
        return new PipelineRunnerVersion
        {
            ObjectModel = objectModel,
            PipelineRunnerVersionProperties = pipelineRunnerVersionProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRunnerVersion value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineRunnerVersionProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
