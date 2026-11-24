using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, comment_Bitbucket Issue tracker API.
/// </summary>
[JsonConverter(typeof(CommentBitbucketIssueTrackerApiConverter))]
public record CommentBitbucketIssueTrackerApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required CommentBitbucketIssueTrackerApiProperties CommentBitbucketIssueTrackerApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out CommentBitbucketIssueTrackerApiProperties commentBitbucketIssueTrackerApiProperties)
    {
        objectModel = ObjectModel;
        commentBitbucketIssueTrackerApiProperties = CommentBitbucketIssueTrackerApiProperties;
    }

    public static implicit operator ObjectModel(CommentBitbucketIssueTrackerApi value) => value.ObjectModel;

    public static implicit operator CommentBitbucketIssueTrackerApiProperties(CommentBitbucketIssueTrackerApi value) =>
        value.CommentBitbucketIssueTrackerApiProperties;
}

file class CommentBitbucketIssueTrackerApiConverter : JsonConverter<CommentBitbucketIssueTrackerApi>
{
    public override CommentBitbucketIssueTrackerApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commentBitbucketIssueTrackerApiProperties = root.Deserialize<CommentBitbucketIssueTrackerApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize CommentBitbucketIssueTrackerApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                commentBitbucketIssueTrackerApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        commentBitbucketIssueTrackerApiProperties.AdditionalProperties.Clear();
        return new CommentBitbucketIssueTrackerApi
        {
            ObjectModel = objectModel,
            CommentBitbucketIssueTrackerApiProperties = commentBitbucketIssueTrackerApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        CommentBitbucketIssueTrackerApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.CommentBitbucketIssueTrackerApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
