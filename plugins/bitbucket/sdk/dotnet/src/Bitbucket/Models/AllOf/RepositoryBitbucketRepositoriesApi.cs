using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Repositories API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketRepositoriesApiConverter))]
public record RepositoryBitbucketRepositoriesApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketRepositoriesApiProperties RepositoryBitbucketRepositoriesApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketRepositoriesApiProperties repositoryBitbucketRepositoriesApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketRepositoriesApiProperties = RepositoryBitbucketRepositoriesApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketRepositoriesApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketRepositoriesApiProperties(RepositoryBitbucketRepositoriesApi value) =>
        value.RepositoryBitbucketRepositoriesApiProperties;
}

file class RepositoryBitbucketRepositoriesApiConverter : JsonConverter<RepositoryBitbucketRepositoriesApi>
{
    public override RepositoryBitbucketRepositoriesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketRepositoriesApiProperties = root.Deserialize<RepositoryBitbucketRepositoriesApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketRepositoriesApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketRepositoriesApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketRepositoriesApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketRepositoriesApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketRepositoriesApiProperties = repositoryBitbucketRepositoriesApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        RepositoryBitbucketRepositoriesApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketRepositoriesApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
