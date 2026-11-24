using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_runner_oauth_client2.
/// </summary>
[JsonConverter(typeof(PipelineRunnerOauthClient2Converter))]
public record PipelineRunnerOauthClient2
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRunnerOauthClient2Properties PipelineRunnerOauthClient2Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineRunnerOauthClient2Properties pipelineRunnerOauthClient2Properties)
    {
        objectModel = ObjectModel;
        pipelineRunnerOauthClient2Properties = PipelineRunnerOauthClient2Properties;
    }

    public static implicit operator ObjectModel(PipelineRunnerOauthClient2 value) => value.ObjectModel;

    public static implicit operator PipelineRunnerOauthClient2Properties(PipelineRunnerOauthClient2 value) =>
        value.PipelineRunnerOauthClient2Properties;
}

file class PipelineRunnerOauthClient2Converter : JsonConverter<PipelineRunnerOauthClient2>
{
    public override PipelineRunnerOauthClient2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRunnerOauthClient2Properties = root.Deserialize<PipelineRunnerOauthClient2Properties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRunnerOauthClient2Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRunnerOauthClient2Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRunnerOauthClient2Properties.AdditionalProperties.Clear();
        return new PipelineRunnerOauthClient2
        {
            ObjectModel = objectModel,
            PipelineRunnerOauthClient2Properties = pipelineRunnerOauthClient2Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRunnerOauthClient2 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineRunnerOauthClient2Properties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
