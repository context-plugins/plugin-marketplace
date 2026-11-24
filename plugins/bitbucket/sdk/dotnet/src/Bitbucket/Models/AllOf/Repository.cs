using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, repository.
/// </summary>
[JsonConverter(typeof(RepositoryConverter))]
public record Repository
{
    public required ObjectModel ObjectModel { get; init; }

    public required RepositoryProperties RepositoryProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out RepositoryProperties repositoryProperties)
    {
        objectModel = ObjectModel;
        repositoryProperties = RepositoryProperties;
    }

    public static implicit operator ObjectModel(Repository value) => value.ObjectModel;

    public static implicit operator RepositoryProperties(Repository value) => value.RepositoryProperties;
}

file class RepositoryConverter : JsonConverter<Repository>
{
    public override Repository Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var repositoryProperties = root.Deserialize<RepositoryProperties>(options) ??
            throw new JsonException("Failed to deserialize RepositoryProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, repositoryProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        repositoryProperties.AdditionalProperties.Clear();
        return new Repository
        {
            ObjectModel = objectModel,
            RepositoryProperties = repositoryProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Repository value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.RepositoryProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
