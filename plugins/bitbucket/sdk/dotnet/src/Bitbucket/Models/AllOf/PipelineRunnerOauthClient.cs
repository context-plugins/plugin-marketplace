using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_runner_oauth_client.
/// </summary>
[JsonConverter(typeof(PipelineRunnerOauthClientConverter))]
public record PipelineRunnerOauthClient
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineRunnerOauthClientProperties PipelineRunnerOauthClientProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineRunnerOauthClientProperties pipelineRunnerOauthClientProperties)
    {
        objectModel = ObjectModel;
        pipelineRunnerOauthClientProperties = PipelineRunnerOauthClientProperties;
    }

    public static implicit operator ObjectModel(PipelineRunnerOauthClient value) => value.ObjectModel;

    public static implicit operator PipelineRunnerOauthClientProperties(PipelineRunnerOauthClient value) =>
        value.PipelineRunnerOauthClientProperties;
}

file class PipelineRunnerOauthClientConverter : JsonConverter<PipelineRunnerOauthClient>
{
    public override PipelineRunnerOauthClient Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineRunnerOauthClientProperties = root.Deserialize<PipelineRunnerOauthClientProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineRunnerOauthClientProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineRunnerOauthClientProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineRunnerOauthClientProperties.AdditionalProperties.Clear();
        return new PipelineRunnerOauthClient
        {
            ObjectModel = objectModel,
            PipelineRunnerOauthClientProperties = pipelineRunnerOauthClientProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineRunnerOauthClient value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineRunnerOauthClientProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
