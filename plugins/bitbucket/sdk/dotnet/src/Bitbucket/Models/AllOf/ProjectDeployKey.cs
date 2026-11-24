using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, project_deploy_key.
/// </summary>
[JsonConverter(typeof(ProjectDeployKeyConverter))]
public record ProjectDeployKey
{
    public required ObjectModel ObjectModel { get; init; }

    public required ProjectDeployKeyProperties ProjectDeployKeyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out ProjectDeployKeyProperties projectDeployKeyProperties)
    {
        objectModel = ObjectModel;
        projectDeployKeyProperties = ProjectDeployKeyProperties;
    }

    public static implicit operator ObjectModel(ProjectDeployKey value) => value.ObjectModel;

    public static implicit operator ProjectDeployKeyProperties(ProjectDeployKey value) =>
        value.ProjectDeployKeyProperties;
}

file class ProjectDeployKeyConverter : JsonConverter<ProjectDeployKey>
{
    public override ProjectDeployKey Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var projectDeployKeyProperties = root.Deserialize<ProjectDeployKeyProperties>(options) ??
            throw new JsonException("Failed to deserialize ProjectDeployKeyProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                projectDeployKeyProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        projectDeployKeyProperties.AdditionalProperties.Clear();
        return new ProjectDeployKey
        {
            ObjectModel = objectModel,
            ProjectDeployKeyProperties = projectDeployKeyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, ProjectDeployKey value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ProjectDeployKeyProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
