using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Source API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketSourceApiConverter))]
public record RepositoryBitbucketSourceApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketSourceApiProperties RepositoryBitbucketSourceApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketSourceApiProperties repositoryBitbucketSourceApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketSourceApiProperties = RepositoryBitbucketSourceApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketSourceApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketSourceApiProperties(RepositoryBitbucketSourceApi value) =>
        value.RepositoryBitbucketSourceApiProperties;
}

file class RepositoryBitbucketSourceApiConverter : JsonConverter<RepositoryBitbucketSourceApi>
{
    public override RepositoryBitbucketSourceApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketSourceApiProperties = root.Deserialize<RepositoryBitbucketSourceApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketSourceApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketSourceApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketSourceApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketSourceApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketSourceApiProperties = repositoryBitbucketSourceApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, RepositoryBitbucketSourceApi value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketSourceApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
