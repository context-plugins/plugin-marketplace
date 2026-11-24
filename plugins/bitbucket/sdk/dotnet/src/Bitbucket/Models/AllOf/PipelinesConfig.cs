using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipelines_config.
/// </summary>
[JsonConverter(typeof(PipelinesConfigConverter))]
public record PipelinesConfig
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelinesConfigProperties PipelinesConfigProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelinesConfigProperties pipelinesConfigProperties)
    {
        objectModel = ObjectModel;
        pipelinesConfigProperties = PipelinesConfigProperties;
    }

    public static implicit operator ObjectModel(PipelinesConfig value) => value.ObjectModel;

    public static implicit operator PipelinesConfigProperties(PipelinesConfig value) => value.PipelinesConfigProperties;
}

file class PipelinesConfigConverter : JsonConverter<PipelinesConfig>
{
    public override PipelinesConfig Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelinesConfigProperties = root.Deserialize<PipelinesConfigProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelinesConfigProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelinesConfigProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelinesConfigProperties.AdditionalProperties.Clear();
        return new PipelinesConfig
        {
            ObjectModel = objectModel,
            PipelinesConfigProperties = pipelinesConfigProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelinesConfig value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelinesConfigProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
