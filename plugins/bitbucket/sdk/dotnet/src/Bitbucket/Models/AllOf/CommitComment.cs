using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of comment, object, commit_comment.
/// </summary>
[JsonConverter(typeof(CommitCommentConverter))]
public record CommitComment
{
    public required Comment Comment { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required CommitCommentProperties CommitCommentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out Comment comment,
        out ObjectModel objectModel,
        out CommitCommentProperties commitCommentProperties)
    {
        comment = Comment;
        objectModel = ObjectModel;
        commitCommentProperties = CommitCommentProperties;
    }

    public static implicit operator Comment(CommitComment value) => value.Comment;

    public static implicit operator ObjectModel(CommitComment value) => value.ObjectModel;

    public static implicit operator CommitCommentProperties(CommitComment value) => value.CommitCommentProperties;
}

file class CommitCommentConverter : JsonConverter<CommitComment>
{
    public override CommitComment Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var comment = root.Deserialize<Comment>(options) ?? throw new JsonException("Failed to deserialize Comment");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commitCommentProperties = root.Deserialize<CommitCommentProperties>(options) ??
            throw new JsonException("Failed to deserialize CommitCommentProperties");
        var extras =
            AdditionalProperties.SharedBy(
                comment.AdditionalProperties,
                objectModel.AdditionalProperties,
                commitCommentProperties.AdditionalProperties);
        comment.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        commitCommentProperties.AdditionalProperties.Clear();
        return new CommitComment
        {
            Comment = comment,
            ObjectModel = objectModel,
            CommitCommentProperties = commitCommentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, CommitComment value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.Comment, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.CommitCommentProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
