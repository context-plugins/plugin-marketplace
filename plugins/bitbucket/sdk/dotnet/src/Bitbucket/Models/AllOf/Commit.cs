using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of base_commit, object, commit.
/// </summary>
[JsonConverter(typeof(CommitConverter))]
public record Commit
{
    public required BaseCommit BaseCommit { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required CommitProperties CommitProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out BaseCommit baseCommit,
        out ObjectModel objectModel,
        out CommitProperties commitProperties)
    {
        baseCommit = BaseCommit;
        objectModel = ObjectModel;
        commitProperties = CommitProperties;
    }

    public static implicit operator BaseCommit(Commit value) => value.BaseCommit;

    public static implicit operator ObjectModel(Commit value) => value.ObjectModel;

    public static implicit operator CommitProperties(Commit value) => value.CommitProperties;
}

file class CommitConverter : JsonConverter<Commit>
{
    public override Commit Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var baseCommit = root.Deserialize<BaseCommit>(options) ??
            throw new JsonException("Failed to deserialize BaseCommit");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commitProperties = root.Deserialize<CommitProperties>(options) ??
            throw new JsonException("Failed to deserialize CommitProperties");
        var extras =
            AdditionalProperties.SharedBy(
                baseCommit.AdditionalProperties,
                objectModel.AdditionalProperties,
                commitProperties.AdditionalProperties);
        baseCommit.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        commitProperties.AdditionalProperties.Clear();
        return new Commit
        {
            BaseCommit = baseCommit,
            ObjectModel = objectModel,
            CommitProperties = commitProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Commit value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.BaseCommit, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.CommitProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
