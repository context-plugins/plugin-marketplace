using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of comment_Bitbucket Issue tracker API, object, issue_comment.
/// </summary>
[JsonConverter(typeof(IssueCommentConverter))]
public record IssueComment
{
    public required CommentBitbucketIssueTrackerApi CommentBitbucketIssueTrackerApi { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required IssueCommentProperties IssueCommentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out CommentBitbucketIssueTrackerApi commentBitbucketIssueTrackerApi,
        out ObjectModel objectModel,
        out IssueCommentProperties issueCommentProperties)
    {
        commentBitbucketIssueTrackerApi = CommentBitbucketIssueTrackerApi;
        objectModel = ObjectModel;
        issueCommentProperties = IssueCommentProperties;
    }

    public static implicit operator CommentBitbucketIssueTrackerApi(IssueComment value) =>
        value.CommentBitbucketIssueTrackerApi;

    public static implicit operator ObjectModel(IssueComment value) => value.ObjectModel;

    public static implicit operator IssueCommentProperties(IssueComment value) => value.IssueCommentProperties;
}

file class IssueCommentConverter : JsonConverter<IssueComment>
{
    public override IssueComment Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var commentBitbucketIssueTrackerApi = root.Deserialize<CommentBitbucketIssueTrackerApi>(options) ??
            throw new JsonException("Failed to deserialize CommentBitbucketIssueTrackerApi");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var issueCommentProperties = root.Deserialize<IssueCommentProperties>(options) ??
            throw new JsonException("Failed to deserialize IssueCommentProperties");
        var extras =
            AdditionalProperties.SharedBy(
                commentBitbucketIssueTrackerApi.AdditionalProperties,
                objectModel.AdditionalProperties,
                issueCommentProperties.AdditionalProperties);
        commentBitbucketIssueTrackerApi.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        issueCommentProperties.AdditionalProperties.Clear();
        return new IssueComment
        {
            CommentBitbucketIssueTrackerApi = commentBitbucketIssueTrackerApi,
            ObjectModel = objectModel,
            IssueCommentProperties = issueCommentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, IssueComment value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.CommentBitbucketIssueTrackerApi, options),
            written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.IssueCommentProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
