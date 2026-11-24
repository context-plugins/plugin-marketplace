using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, commitstatus_Bitbucket Pullrequests API.
/// </summary>
[JsonConverter(typeof(CommitstatusBitbucketPullrequestsApiConverter))]
public record CommitstatusBitbucketPullrequestsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required CommitstatusBitbucketPullrequestsApiProperties CommitstatusBitbucketPullrequestsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out CommitstatusBitbucketPullrequestsApiProperties commitstatusBitbucketPullrequestsApiProperties)
    {
        objectModel = ObjectModel;
        commitstatusBitbucketPullrequestsApiProperties = CommitstatusBitbucketPullrequestsApiProperties;
    }

    public static implicit operator ObjectModel(CommitstatusBitbucketPullrequestsApi value) => value.ObjectModel;

    public static implicit operator CommitstatusBitbucketPullrequestsApiProperties(CommitstatusBitbucketPullrequestsApi value) =>
        value.CommitstatusBitbucketPullrequestsApiProperties;
}

file class CommitstatusBitbucketPullrequestsApiConverter : JsonConverter<CommitstatusBitbucketPullrequestsApi>
{
    public override CommitstatusBitbucketPullrequestsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commitstatusBitbucketPullrequestsApiProperties = root.Deserialize<CommitstatusBitbucketPullrequestsApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize CommitstatusBitbucketPullrequestsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                commitstatusBitbucketPullrequestsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        commitstatusBitbucketPullrequestsApiProperties.AdditionalProperties.Clear();
        return new CommitstatusBitbucketPullrequestsApi
        {
            ObjectModel = objectModel,
            CommitstatusBitbucketPullrequestsApiProperties = commitstatusBitbucketPullrequestsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        CommitstatusBitbucketPullrequestsApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.CommitstatusBitbucketPullrequestsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
