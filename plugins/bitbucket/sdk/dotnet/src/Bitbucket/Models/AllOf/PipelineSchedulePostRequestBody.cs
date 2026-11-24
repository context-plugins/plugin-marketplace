using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_schedule_post_request_body.
/// </summary>
[JsonConverter(typeof(PipelineSchedulePostRequestBodyConverter))]
public record PipelineSchedulePostRequestBody
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineSchedulePostRequestBodyProperties PipelineSchedulePostRequestBodyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineSchedulePostRequestBodyProperties pipelineSchedulePostRequestBodyProperties)
    {
        objectModel = ObjectModel;
        pipelineSchedulePostRequestBodyProperties = PipelineSchedulePostRequestBodyProperties;
    }

    public static implicit operator ObjectModel(PipelineSchedulePostRequestBody value) => value.ObjectModel;

    public static implicit operator PipelineSchedulePostRequestBodyProperties(PipelineSchedulePostRequestBody value) =>
        value.PipelineSchedulePostRequestBodyProperties;
}

file class PipelineSchedulePostRequestBodyConverter : JsonConverter<PipelineSchedulePostRequestBody>
{
    public override PipelineSchedulePostRequestBody Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineSchedulePostRequestBodyProperties = root.Deserialize<PipelineSchedulePostRequestBodyProperties>(
            options) ??
            throw new JsonException("Failed to deserialize PipelineSchedulePostRequestBodyProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineSchedulePostRequestBodyProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineSchedulePostRequestBodyProperties.AdditionalProperties.Clear();
        return new PipelineSchedulePostRequestBody
        {
            ObjectModel = objectModel,
            PipelineSchedulePostRequestBodyProperties = pipelineSchedulePostRequestBodyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        PipelineSchedulePostRequestBody value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineSchedulePostRequestBodyProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
