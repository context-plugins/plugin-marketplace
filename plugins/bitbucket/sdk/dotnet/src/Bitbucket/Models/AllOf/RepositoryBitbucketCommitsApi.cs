using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Commits API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketCommitsApiConverter))]
public record RepositoryBitbucketCommitsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketCommitsApiProperties RepositoryBitbucketCommitsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketCommitsApiProperties repositoryBitbucketCommitsApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketCommitsApiProperties = RepositoryBitbucketCommitsApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketCommitsApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketCommitsApiProperties(RepositoryBitbucketCommitsApi value) =>
        value.RepositoryBitbucketCommitsApiProperties;
}

file class RepositoryBitbucketCommitsApiConverter : JsonConverter<RepositoryBitbucketCommitsApi>
{
    public override RepositoryBitbucketCommitsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketCommitsApiProperties = root.Deserialize<RepositoryBitbucketCommitsApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketCommitsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketCommitsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketCommitsApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketCommitsApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketCommitsApiProperties = repositoryBitbucketCommitsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        RepositoryBitbucketCommitsApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketCommitsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
