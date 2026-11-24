using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, project_Bitbucket Deployments API.
/// </summary>
[JsonConverter(typeof(ProjectBitbucketDeploymentsApiConverter))]
public record ProjectBitbucketDeploymentsApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required ProjectBitbucketDeploymentsApiProperties ProjectBitbucketDeploymentsApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out ProjectBitbucketDeploymentsApiProperties projectBitbucketDeploymentsApiProperties)
    {
        objectModel = ObjectModel;
        projectBitbucketDeploymentsApiProperties = ProjectBitbucketDeploymentsApiProperties;
    }

    public static implicit operator ObjectModel(ProjectBitbucketDeploymentsApi value) => value.ObjectModel;

    public static implicit operator ProjectBitbucketDeploymentsApiProperties(ProjectBitbucketDeploymentsApi value) =>
        value.ProjectBitbucketDeploymentsApiProperties;
}

file class ProjectBitbucketDeploymentsApiConverter : JsonConverter<ProjectBitbucketDeploymentsApi>
{
    public override ProjectBitbucketDeploymentsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var projectBitbucketDeploymentsApiProperties = root.Deserialize<ProjectBitbucketDeploymentsApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize ProjectBitbucketDeploymentsApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                projectBitbucketDeploymentsApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        projectBitbucketDeploymentsApiProperties.AdditionalProperties.Clear();
        return new ProjectBitbucketDeploymentsApi
        {
            ObjectModel = objectModel,
            ProjectBitbucketDeploymentsApiProperties = projectBitbucketDeploymentsApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        ProjectBitbucketDeploymentsApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.ProjectBitbucketDeploymentsApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
