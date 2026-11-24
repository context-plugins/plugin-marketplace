using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Refs API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketRefsApiConverter))]
public record RepositoryBitbucketRefsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketRefsApiProperties RepositoryBitbucketRefsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketRefsApiProperties repositoryBitbucketRefsApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketRefsApiProperties = RepositoryBitbucketRefsApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketRefsApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketRefsApiProperties(RepositoryBitbucketRefsApi value) =>
        value.RepositoryBitbucketRefsApiProperties;
}

file class RepositoryBitbucketRefsApiConverter : JsonConverter<RepositoryBitbucketRefsApi>
{
    public override RepositoryBitbucketRefsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketRefsApiProperties = root.Deserialize<RepositoryBitbucketRefsApiProperties>(options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketRefsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketRefsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketRefsApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketRefsApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketRefsApiProperties = repositoryBitbucketRefsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, RepositoryBitbucketRefsApi value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketRefsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
