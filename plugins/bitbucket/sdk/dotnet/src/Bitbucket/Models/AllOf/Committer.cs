using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, committer.
/// </summary>
[JsonConverter(typeof(CommitterConverter))]
public record Committer
{
    public required ObjectModel ObjectModel { get; init; }

    public required CommitterProperties CommitterProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out CommitterProperties committerProperties)
    {
        objectModel = ObjectModel;
        committerProperties = CommitterProperties;
    }

    public static implicit operator ObjectModel(Committer value) => value.ObjectModel;

    public static implicit operator CommitterProperties(Committer value) => value.CommitterProperties;
}

file class CommitterConverter : JsonConverter<Committer>
{
    public override Committer Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var committerProperties = root.Deserialize<CommitterProperties>(options) ??
            throw new JsonException("Failed to deserialize CommitterProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, committerProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        committerProperties.AdditionalProperties.Clear();
        return new Committer
        {
            ObjectModel = objectModel,
            CommitterProperties = committerProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Committer value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.CommitterProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
