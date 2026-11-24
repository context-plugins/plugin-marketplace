using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, commitstatus.
/// </summary>
[JsonConverter(typeof(CommitstatusConverter))]
public record Commitstatus
{
    public required ObjectModel ObjectModel { get; init; }

    public required CommitstatusProperties CommitstatusProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out CommitstatusProperties commitstatusProperties)
    {
        objectModel = ObjectModel;
        commitstatusProperties = CommitstatusProperties;
    }

    public static implicit operator ObjectModel(Commitstatus value) => value.ObjectModel;

    public static implicit operator CommitstatusProperties(Commitstatus value) => value.CommitstatusProperties;
}

file class CommitstatusConverter : JsonConverter<Commitstatus>
{
    public override Commitstatus Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commitstatusProperties = root.Deserialize<CommitstatusProperties>(options) ??
            throw new JsonException("Failed to deserialize CommitstatusProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                commitstatusProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        commitstatusProperties.AdditionalProperties.Clear();
        return new Commitstatus
        {
            ObjectModel = objectModel,
            CommitstatusProperties = commitstatusProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Commitstatus value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.CommitstatusProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
