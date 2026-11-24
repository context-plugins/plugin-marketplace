using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of base_commit, object, snippet_commit.
/// </summary>
[JsonConverter(typeof(SnippetCommitConverter))]
public record SnippetCommit
{
    public required BaseCommit BaseCommit { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required SnippetCommitProperties SnippetCommitProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out BaseCommit baseCommit,
        out ObjectModel objectModel,
        out SnippetCommitProperties snippetCommitProperties)
    {
        baseCommit = BaseCommit;
        objectModel = ObjectModel;
        snippetCommitProperties = SnippetCommitProperties;
    }

    public static implicit operator BaseCommit(SnippetCommit value) => value.BaseCommit;

    public static implicit operator ObjectModel(SnippetCommit value) => value.ObjectModel;

    public static implicit operator SnippetCommitProperties(SnippetCommit value) => value.SnippetCommitProperties;
}

file class SnippetCommitConverter : JsonConverter<SnippetCommit>
{
    public override SnippetCommit Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var baseCommit = root.Deserialize<BaseCommit>(options) ??
            throw new JsonException("Failed to deserialize BaseCommit");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var snippetCommitProperties = root.Deserialize<SnippetCommitProperties>(options) ??
            throw new JsonException("Failed to deserialize SnippetCommitProperties");
        var extras =
            AdditionalProperties.SharedBy(
                baseCommit.AdditionalProperties,
                objectModel.AdditionalProperties,
                snippetCommitProperties.AdditionalProperties);
        baseCommit.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        snippetCommitProperties.AdditionalProperties.Clear();
        return new SnippetCommit
        {
            BaseCommit = baseCommit,
            ObjectModel = objectModel,
            SnippetCommitProperties = snippetCommitProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, SnippetCommit value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.BaseCommit, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.SnippetCommitProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
