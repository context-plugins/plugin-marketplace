using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, comment_Bitbucket Pullrequests API.
/// </summary>
[JsonConverter(typeof(CommentBitbucketPullrequestsApiConverter))]
public record CommentBitbucketPullrequestsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required CommentBitbucketPullrequestsApiProperties CommentBitbucketPullrequestsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out CommentBitbucketPullrequestsApiProperties commentBitbucketPullrequestsApiProperties)
    {
        objectModel = ObjectModel;
        commentBitbucketPullrequestsApiProperties = CommentBitbucketPullrequestsApiProperties;
    }

    public static implicit operator ObjectModel(CommentBitbucketPullrequestsApi value) => value.ObjectModel;

    public static implicit operator CommentBitbucketPullrequestsApiProperties(CommentBitbucketPullrequestsApi value) =>
        value.CommentBitbucketPullrequestsApiProperties;
}

file class CommentBitbucketPullrequestsApiConverter : JsonConverter<CommentBitbucketPullrequestsApi>
{
    public override CommentBitbucketPullrequestsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commentBitbucketPullrequestsApiProperties = root.Deserialize<CommentBitbucketPullrequestsApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize CommentBitbucketPullrequestsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                commentBitbucketPullrequestsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        commentBitbucketPullrequestsApiProperties.AdditionalProperties.Clear();
        return new CommentBitbucketPullrequestsApi
        {
            ObjectModel = objectModel,
            CommentBitbucketPullrequestsApiProperties = commentBitbucketPullrequestsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        CommentBitbucketPullrequestsApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.CommentBitbucketPullrequestsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
