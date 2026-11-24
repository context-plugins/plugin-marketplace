using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_ssh_key_pair.
/// </summary>
[JsonConverter(typeof(PipelineSshKeyPairConverter))]
public record PipelineSshKeyPair
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineSshKeyPairProperties PipelineSshKeyPairProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PipelineSshKeyPairProperties pipelineSshKeyPairProperties)
    {
        objectModel = ObjectModel;
        pipelineSshKeyPairProperties = PipelineSshKeyPairProperties;
    }

    public static implicit operator ObjectModel(PipelineSshKeyPair value) => value.ObjectModel;

    public static implicit operator PipelineSshKeyPairProperties(PipelineSshKeyPair value) =>
        value.PipelineSshKeyPairProperties;
}

file class PipelineSshKeyPairConverter : JsonConverter<PipelineSshKeyPair>
{
    public override PipelineSshKeyPair Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineSshKeyPairProperties = root.Deserialize<PipelineSshKeyPairProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineSshKeyPairProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineSshKeyPairProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineSshKeyPairProperties.AdditionalProperties.Clear();
        return new PipelineSshKeyPair
        {
            ObjectModel = objectModel,
            PipelineSshKeyPairProperties = pipelineSshKeyPairProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineSshKeyPair value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PipelineSshKeyPairProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
