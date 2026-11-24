using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_variable.
/// </summary>
[JsonConverter(typeof(PipelineVariableConverter))]
public record PipelineVariable
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineVariableProperties PipelineVariableProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineVariableProperties pipelineVariableProperties)
    {
        objectModel = ObjectModel;
        pipelineVariableProperties = PipelineVariableProperties;
    }

    public static implicit operator ObjectModel(PipelineVariable value) => value.ObjectModel;

    public static implicit operator PipelineVariableProperties(PipelineVariable value) =>
        value.PipelineVariableProperties;
}

file class PipelineVariableConverter : JsonConverter<PipelineVariable>
{
    public override PipelineVariable Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineVariableProperties = root.Deserialize<PipelineVariableProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineVariableProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineVariableProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineVariableProperties.AdditionalProperties.Clear();
        return new PipelineVariable
        {
            ObjectModel = objectModel,
            PipelineVariableProperties = pipelineVariableProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineVariable value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineVariableProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
