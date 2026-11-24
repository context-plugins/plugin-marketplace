using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Issue tracker API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketIssueTrackerApiConverter))]
public record RepositoryBitbucketIssueTrackerApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketIssueTrackerApiProperties RepositoryBitbucketIssueTrackerApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketIssueTrackerApiProperties repositoryBitbucketIssueTrackerApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketIssueTrackerApiProperties = RepositoryBitbucketIssueTrackerApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketIssueTrackerApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketIssueTrackerApiProperties(RepositoryBitbucketIssueTrackerApi value) =>
        value.RepositoryBitbucketIssueTrackerApiProperties;
}

file class RepositoryBitbucketIssueTrackerApiConverter : JsonConverter<RepositoryBitbucketIssueTrackerApi>
{
    public override RepositoryBitbucketIssueTrackerApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketIssueTrackerApiProperties = root.Deserialize<RepositoryBitbucketIssueTrackerApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketIssueTrackerApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketIssueTrackerApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketIssueTrackerApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketIssueTrackerApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketIssueTrackerApiProperties = repositoryBitbucketIssueTrackerApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        RepositoryBitbucketIssueTrackerApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketIssueTrackerApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
