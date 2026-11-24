using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository_Bitbucket Workspaces API.
/// </summary>
[JsonConverter(typeof(RepositoryBitbucketWorkspacesApiConverter))]
public record RepositoryBitbucketWorkspacesApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryBitbucketWorkspacesApiProperties RepositoryBitbucketWorkspacesApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out RepositoryBitbucketWorkspacesApiProperties repositoryBitbucketWorkspacesApiProperties)
    {
        objectModel = ObjectModel;
        repositoryBitbucketWorkspacesApiProperties = RepositoryBitbucketWorkspacesApiProperties;
    }

    public static implicit operator ObjectModel(RepositoryBitbucketWorkspacesApi value) => value.ObjectModel;

    public static implicit operator RepositoryBitbucketWorkspacesApiProperties(RepositoryBitbucketWorkspacesApi value) =>
        value.RepositoryBitbucketWorkspacesApiProperties;
}

file class RepositoryBitbucketWorkspacesApiConverter : JsonConverter<RepositoryBitbucketWorkspacesApi>
{
    public override RepositoryBitbucketWorkspacesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryBitbucketWorkspacesApiProperties = root.Deserialize<RepositoryBitbucketWorkspacesApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize RepositoryBitbucketWorkspacesApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                repositoryBitbucketWorkspacesApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryBitbucketWorkspacesApiProperties.AdditionalProperties.Clear();
        return new RepositoryBitbucketWorkspacesApi
        {
            ObjectModel = objectModel,
            RepositoryBitbucketWorkspacesApiProperties = repositoryBitbucketWorkspacesApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        RepositoryBitbucketWorkspacesApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.RepositoryBitbucketWorkspacesApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
