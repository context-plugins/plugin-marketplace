using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Search API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketSearchApiConverter))]
public record RepositoryBitbucketSearchApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketSearchApiProperties RepositoryBitbucketSearchApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketSearchApiProperties repositoryBitbucketSearchApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketSearchApiProperties = RepositoryBitbucketSearchApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketSearchApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketSearchApiProperties(RepositoryBitbucketSearchApi value) =>
        value.RepositoryBitbucketSearchApiProperties;
}

file class RepositoryBitbucketSearchApiConverter : JsonConverter<RepositoryBitbucketSearchApi>
{
    public override RepositoryBitbucketSearchApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketSearchApiProperties = root.Deserialize<RepositoryBitbucketSearchApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketSearchApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketSearchApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketSearchApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketSearchApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketSearchApiProperties = repositoryBitbucketSearchApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, RepositoryBitbucketSearchApi value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketSearchApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
