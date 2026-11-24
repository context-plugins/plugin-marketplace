using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, project_Bitbucket Projects API.
/// </summary>
[JsonConverter(typeof(ProjectBitbucketProjectsApiConverter))]
public record ProjectBitbucketProjectsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required ProjectBitbucketProjectsApiProperties ProjectBitbucketProjectsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out ProjectBitbucketProjectsApiProperties projectBitbucketProjectsApiProperties)
    {
        objectModel = ObjectModel;
        projectBitbucketProjectsApiProperties = ProjectBitbucketProjectsApiProperties;
    }

    public static implicit operator ObjectModel(ProjectBitbucketProjectsApi value) => value.ObjectModel;

    public static implicit operator ProjectBitbucketProjectsApiProperties(ProjectBitbucketProjectsApi value) =>
        value.ProjectBitbucketProjectsApiProperties;
}

file class ProjectBitbucketProjectsApiConverter : JsonConverter<ProjectBitbucketProjectsApi>
{
    public override ProjectBitbucketProjectsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var projectBitbucketProjectsApiProperties = root.Deserialize<ProjectBitbucketProjectsApiProperties>(options) ??
            throw new JsonException("Failed to deserialize ProjectBitbucketProjectsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                projectBitbucketProjectsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        projectBitbucketProjectsApiProperties.AdditionalProperties.Clear();
        return new ProjectBitbucketProjectsApi
        {
            ObjectModel = objectModel,
            ProjectBitbucketProjectsApiProperties = projectBitbucketProjectsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, ProjectBitbucketProjectsApi value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.ProjectBitbucketProjectsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
