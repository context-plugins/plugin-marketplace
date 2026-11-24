using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_ssh_public_key.
/// </summary>
[JsonConverter(typeof(PipelineSshPublicKeyConverter))]
public record PipelineSshPublicKey
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineSshPublicKeyProperties PipelineSshPublicKeyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineSshPublicKeyProperties pipelineSshPublicKeyProperties)
    {
        objectModel = ObjectModel;
        pipelineSshPublicKeyProperties = PipelineSshPublicKeyProperties;
    }

    public static implicit operator ObjectModel(PipelineSshPublicKey value) => value.ObjectModel;

    public static implicit operator PipelineSshPublicKeyProperties(PipelineSshPublicKey value) =>
        value.PipelineSshPublicKeyProperties;
}

file class PipelineSshPublicKeyConverter : JsonConverter<PipelineSshPublicKey>
{
    public override PipelineSshPublicKey Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineSshPublicKeyProperties = root.Deserialize<PipelineSshPublicKeyProperties>(options) ??
            throw new JsonException("Failed to deserialize PipelineSshPublicKeyProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineSshPublicKeyProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineSshPublicKeyProperties.AdditionalProperties.Clear();
        return new PipelineSshPublicKey
        {
            ObjectModel = objectModel,
            PipelineSshPublicKeyProperties = pipelineSshPublicKeyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineSshPublicKey value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineSshPublicKeyProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
