using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of comment_Bitbucket Pullrequests API, object, pullrequest_comment.
/// </summary>
[JsonConverter(typeof(PullrequestCommentConverter))]
public record PullrequestComment
{
    public required CommentBitbucketPullrequestsApi CommentBitbucketPullrequestsApi { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required PullrequestCommentProperties PullrequestCommentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out CommentBitbucketPullrequestsApi commentBitbucketPullrequestsApi,
        out ObjectModel objectModel,
        out PullrequestCommentProperties pullrequestCommentProperties)
    {
        commentBitbucketPullrequestsApi = CommentBitbucketPullrequestsApi;
        objectModel = ObjectModel;
        pullrequestCommentProperties = PullrequestCommentProperties;
    }

    public static implicit operator CommentBitbucketPullrequestsApi(PullrequestComment value) =>
        value.CommentBitbucketPullrequestsApi;

    public static implicit operator ObjectModel(PullrequestComment value) => value.ObjectModel;

    public static implicit operator PullrequestCommentProperties(PullrequestComment value) =>
        value.PullrequestCommentProperties;
}

file class PullrequestCommentConverter : JsonConverter<PullrequestComment>
{
    public override PullrequestComment Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var commentBitbucketPullrequestsApi = root.Deserialize<CommentBitbucketPullrequestsApi>(options) ??
            throw new JsonException("Failed to deserialize CommentBitbucketPullrequestsApi");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pullrequestCommentProperties = root.Deserialize<PullrequestCommentProperties>(options) ??
            throw new JsonException("Failed to deserialize PullrequestCommentProperties");
        var extras =
            AdditionalProperties.SharedBy(
                commentBitbucketPullrequestsApi.AdditionalProperties,
                objectModel.AdditionalProperties,
                pullrequestCommentProperties.AdditionalProperties);
        commentBitbucketPullrequestsApi.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        pullrequestCommentProperties.AdditionalProperties.Clear();
        return new PullrequestComment
        {
            CommentBitbucketPullrequestsApi = commentBitbucketPullrequestsApi,
            ObjectModel = objectModel,
            PullrequestCommentProperties = pullrequestCommentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, PullrequestComment value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.CommentBitbucketPullrequestsApi, options),
            written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PullrequestCommentProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
