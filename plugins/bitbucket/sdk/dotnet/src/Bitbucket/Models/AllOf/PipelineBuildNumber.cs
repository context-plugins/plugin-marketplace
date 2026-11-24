using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_build_number.
/// </summary>
[JsonConverter(typeof(PipelineBuildNumberConverter))]
public record PipelineBuildNumber
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineBuildNumberProperties PipelineBuildNumberProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineBuildNumberProperties pipelineBuildNumberProperties)
    {
        objectModel = ObjectModel;
        pipelineBuildNumberProperties = PipelineBuildNumberProperties;
    }

    public static implicit operator ObjectModel(PipelineBuildNumber value) => value.ObjectModel;

    public static implicit operator PipelineBuildNumberProperties(PipelineBuildNumber value) =>
        value.PipelineBuildNumberProperties;
}

file class PipelineBuildNumberConverter : JsonConverter<PipelineBuildNumber>
{
    public override PipelineBuildNumber Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineBuildNumberProperties = root.Deserialize<PipelineBuildNumberProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineBuildNumberProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineBuildNumberProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineBuildNumberProperties.AdditionalProperties.Clear();
        return new PipelineBuildNumber
        {
            ObjectModel = objectModel,
            PipelineBuildNumberProperties = pipelineBuildNumberProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineBuildNumber value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineBuildNumberProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
