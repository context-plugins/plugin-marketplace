using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, comment.
/// </summary>
[JsonConverter(typeof(CommentConverter))]
public record Comment
{
    public required ObjectModel ObjectModel { get; init; }

    public required CommentProperties CommentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out CommentProperties commentProperties)
    {
        objectModel = ObjectModel;
        commentProperties = CommentProperties;
    }

    public static implicit operator ObjectModel(Comment value) => value.ObjectModel;

    public static implicit operator CommentProperties(Comment value) => value.CommentProperties;
}

file class CommentConverter : JsonConverter<Comment>
{
    public override Comment Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commentProperties = root.Deserialize<CommentProperties>(options) ??
            throw new JsonException("Failed to deserialize CommentProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, commentProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        commentProperties.AdditionalProperties.Clear();
        return new Comment
        {
            ObjectModel = objectModel,
            CommentProperties = commentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Comment value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.CommentProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
