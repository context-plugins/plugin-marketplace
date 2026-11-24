using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, project.
/// </summary>
[JsonConverter(typeof(ProjectConverter))]
public record Project
{
    public required ObjectModel ObjectModel { get; init; }

    public required ProjectProperties ProjectProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out ProjectProperties projectProperties)
    {
        objectModel = ObjectModel;
        projectProperties = ProjectProperties;
    }

    public static implicit operator ObjectModel(Project value) => value.ObjectModel;

    public static implicit operator ProjectProperties(Project value) => value.ProjectProperties;
}

file class ProjectConverter : JsonConverter<Project>
{
    public override Project Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var projectProperties = root.Deserialize<ProjectProperties>(options) ??
            throw new JsonException("Failed to deserialize ProjectProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, projectProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        projectProperties.AdditionalProperties.Clear();
        return new Project
        {
            ObjectModel = objectModel,
            ProjectProperties = projectProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Project value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ProjectProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
