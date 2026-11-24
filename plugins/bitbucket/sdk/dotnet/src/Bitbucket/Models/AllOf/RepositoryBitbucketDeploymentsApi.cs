using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Deployments API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketDeploymentsApiConverter))]
public record RepositoryBitbucketDeploymentsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketDeploymentsApiProperties RepositoryBitbucketDeploymentsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketDeploymentsApiProperties repositoryBitbucketDeploymentsApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketDeploymentsApiProperties = RepositoryBitbucketDeploymentsApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketDeploymentsApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketDeploymentsApiProperties(RepositoryBitbucketDeploymentsApi value) =>
        value.RepositoryBitbucketDeploymentsApiProperties;
}

file class RepositoryBitbucketDeploymentsApiConverter : JsonConverter<RepositoryBitbucketDeploymentsApi>
{
    public override RepositoryBitbucketDeploymentsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketDeploymentsApiProperties = root.Deserialize<RepositoryBitbucketDeploymentsApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketDeploymentsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketDeploymentsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketDeploymentsApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketDeploymentsApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketDeploymentsApiProperties = repositoryBitbucketDeploymentsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        RepositoryBitbucketDeploymentsApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketDeploymentsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
