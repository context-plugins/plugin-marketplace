using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, snippet_comment.
/// </summary>
[JsonConverter(typeof(SnippetCommentConverter))]
public record SnippetComment
{
    public required ObjectModel ObjectModel { get; init; }

    public required SnippetCommentProperties SnippetCommentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out SnippetCommentProperties snippetCommentProperties)
    {
        objectModel = ObjectModel;
        snippetCommentProperties = SnippetCommentProperties;
    }

    public static implicit operator ObjectModel(SnippetComment value) => value.ObjectModel;

    public static implicit operator SnippetCommentProperties(SnippetComment value) => value.SnippetCommentProperties;
}

file class SnippetCommentConverter : JsonConverter<SnippetComment>
{
    public override SnippetComment Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var snippetCommentProperties = root.Deserialize<SnippetCommentProperties>(options) ??
            throw new JsonException("Failed to deserialize SnippetCommentProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                snippetCommentProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        snippetCommentProperties.AdditionalProperties.Clear();
        return new SnippetComment
        {
            ObjectModel = objectModel,
            SnippetCommentProperties = snippetCommentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, SnippetComment value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.SnippetCommentProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
