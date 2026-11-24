using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_known_host.
/// </summary>
[JsonConverter(typeof(PipelineKnownHostConverter))]
public record PipelineKnownHost
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineKnownHostProperties PipelineKnownHostProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineKnownHostProperties pipelineKnownHostProperties)
    {
        objectModel = ObjectModel;
        pipelineKnownHostProperties = PipelineKnownHostProperties;
    }

    public static implicit operator ObjectModel(PipelineKnownHost value) => value.ObjectModel;

    public static implicit operator PipelineKnownHostProperties(PipelineKnownHost value) =>
        value.PipelineKnownHostProperties;
}

file class PipelineKnownHostConverter : JsonConverter<PipelineKnownHost>
{
    public override PipelineKnownHost Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineKnownHostProperties = root.Deserialize<PipelineKnownHostProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineKnownHostProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineKnownHostProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineKnownHostProperties.AdditionalProperties.Clear();
        return new PipelineKnownHost
        {
            ObjectModel = objectModel,
            PipelineKnownHostProperties = pipelineKnownHostProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineKnownHost value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineKnownHostProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
