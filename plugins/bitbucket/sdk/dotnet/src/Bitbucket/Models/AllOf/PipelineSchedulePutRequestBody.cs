using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_schedule_put_request_body.
/// </summary>
[JsonConverter(typeof(PipelineSchedulePutRequestBodyConverter))]
public record PipelineSchedulePutRequestBody
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineSchedulePutRequestBodyProperties PipelineSchedulePutRequestBodyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineSchedulePutRequestBodyProperties pipelineSchedulePutRequestBodyProperties)
    {
        objectModel = ObjectModel;
        pipelineSchedulePutRequestBodyProperties = PipelineSchedulePutRequestBodyProperties;
    }

    public static implicit operator ObjectModel(PipelineSchedulePutRequestBody value) => value.ObjectModel;

    public static implicit operator PipelineSchedulePutRequestBodyProperties(PipelineSchedulePutRequestBody value) =>
        value.PipelineSchedulePutRequestBodyProperties;
}

file class PipelineSchedulePutRequestBodyConverter : JsonConverter<PipelineSchedulePutRequestBody>
{
    public override PipelineSchedulePutRequestBody Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineSchedulePutRequestBodyProperties = root.Deserialize<PipelineSchedulePutRequestBodyProperties>(
            options) ??
            throw new JsonException("Failed to deserialize PipelineSchedulePutRequestBodyProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineSchedulePutRequestBodyProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineSchedulePutRequestBodyProperties.AdditionalProperties.Clear();
        return new PipelineSchedulePutRequestBody
        {
            ObjectModel = objectModel,
            PipelineSchedulePutRequestBodyProperties = pipelineSchedulePutRequestBodyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        PipelineSchedulePutRequestBody value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineSchedulePutRequestBodyProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
