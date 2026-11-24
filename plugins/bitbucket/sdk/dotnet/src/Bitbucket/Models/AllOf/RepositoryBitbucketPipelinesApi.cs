using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Pipelines API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketPipelinesApiConverter))]
public record RepositoryBitbucketPipelinesApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketPipelinesApiProperties RepositoryBitbucketPipelinesApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketPipelinesApiProperties repositoryBitbucketPipelinesApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketPipelinesApiProperties = RepositoryBitbucketPipelinesApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketPipelinesApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketPipelinesApiProperties(RepositoryBitbucketPipelinesApi value) =>
        value.RepositoryBitbucketPipelinesApiProperties;
}

file class RepositoryBitbucketPipelinesApiConverter : JsonConverter<RepositoryBitbucketPipelinesApi>
{
    public override RepositoryBitbucketPipelinesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketPipelinesApiProperties = root.Deserialize<RepositoryBitbucketPipelinesApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketPipelinesApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketPipelinesApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketPipelinesApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketPipelinesApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketPipelinesApiProperties = repositoryBitbucketPipelinesApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        RepositoryBitbucketPipelinesApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketPipelinesApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
