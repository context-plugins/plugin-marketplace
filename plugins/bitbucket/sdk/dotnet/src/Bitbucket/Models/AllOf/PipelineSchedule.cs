using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_schedule.
/// </summary>
[JsonConverter(typeof(PipelineScheduleConverter))]
public record PipelineSchedule
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineScheduleProperties PipelineScheduleProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineScheduleProperties pipelineScheduleProperties)
    {
        objectModel = ObjectModel;
        pipelineScheduleProperties = PipelineScheduleProperties;
    }

    public static implicit operator ObjectModel(PipelineSchedule value) => value.ObjectModel;

    public static implicit operator PipelineScheduleProperties(PipelineSchedule value) =>
        value.PipelineScheduleProperties;
}

file class PipelineScheduleConverter : JsonConverter<PipelineSchedule>
{
    public override PipelineSchedule Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineScheduleProperties = root.Deserialize<PipelineScheduleProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineScheduleProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineScheduleProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineScheduleProperties.AdditionalProperties.Clear();
        return new PipelineSchedule
        {
            ObjectModel = objectModel,
            PipelineScheduleProperties = pipelineScheduleProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineSchedule value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineScheduleProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
