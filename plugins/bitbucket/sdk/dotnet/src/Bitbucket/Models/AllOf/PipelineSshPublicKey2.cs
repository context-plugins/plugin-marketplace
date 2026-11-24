using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pipeline_ssh_public_key2.
/// </summary>
[JsonConverter(typeof(PipelineSshPublicKey2Converter))]
public record PipelineSshPublicKey2
{
    public required ObjectModel ObjectModel { get; init; }

    public required PipelineSshPublicKey2Properties PipelineSshPublicKey2Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out PipelineSshPublicKey2Properties pipelineSshPublicKey2Properties)
    {
        objectModel = ObjectModel;
        pipelineSshPublicKey2Properties = PipelineSshPublicKey2Properties;
    }

    public static implicit operator ObjectModel(PipelineSshPublicKey2 value) => value.ObjectModel;

    public static implicit operator PipelineSshPublicKey2Properties(PipelineSshPublicKey2 value) =>
        value.PipelineSshPublicKey2Properties;
}

file class PipelineSshPublicKey2Converter : JsonConverter<PipelineSshPublicKey2>
{
    public override PipelineSshPublicKey2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pipelineSshPublicKey2Properties = root.Deserialize<PipelineSshPublicKey2Properties>(options) ??
            throw new JsonException("Failed to deserialize PipelineSshPublicKey2Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                pipelineSshPublicKey2Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pipelineSshPublicKey2Properties.AdditionalProperties.Clear();
        return new PipelineSshPublicKey2
        {
            ObjectModel = objectModel,
            PipelineSshPublicKey2Properties = pipelineSshPublicKey2Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PipelineSshPublicKey2 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.PipelineSshPublicKey2Properties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
