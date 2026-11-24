using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Pullrequests API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketPullrequestsApiConverter))]
public record RepositoryBitbucketPullrequestsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketPullrequestsApiProperties RepositoryBitbucketPullrequestsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketPullrequestsApiProperties repositoryBitbucketPullrequestsApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketPullrequestsApiProperties = RepositoryBitbucketPullrequestsApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketPullrequestsApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketPullrequestsApiProperties(RepositoryBitbucketPullrequestsApi value) =>
        value.RepositoryBitbucketPullrequestsApiProperties;
}

file class RepositoryBitbucketPullrequestsApiConverter : JsonConverter<RepositoryBitbucketPullrequestsApi>
{
    public override RepositoryBitbucketPullrequestsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketPullrequestsApiProperties = root.Deserialize<RepositoryBitbucketPullrequestsApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketPullrequestsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketPullrequestsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketPullrequestsApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketPullrequestsApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketPullrequestsApiProperties = repositoryBitbucketPullrequestsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        RepositoryBitbucketPullrequestsApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketPullrequestsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
