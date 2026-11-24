using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, project_branching_model.
/// </summary>
[JsonConverter(typeof(ProjectBranchingModelConverter))]
public record ProjectBranchingModel
{
    public required ObjectModel ObjectModel { get; init; }

    public required ProjectBranchingModelProperties ProjectBranchingModelProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out ProjectBranchingModelProperties projectBranchingModelProperties)
    {
        objectModel = ObjectModel;
        projectBranchingModelProperties = ProjectBranchingModelProperties;
    }

    public static implicit operator ObjectModel(ProjectBranchingModel value) => value.ObjectModel;

    public static implicit operator ProjectBranchingModelProperties(ProjectBranchingModel value) =>
        value.ProjectBranchingModelProperties;
}

file class ProjectBranchingModelConverter : JsonConverter<ProjectBranchingModel>
{
    public override ProjectBranchingModel Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var projectBranchingModelProperties = root.Deserialize<ProjectBranchingModelProperties>(options) ??
            throw new JsonException("Failed to deserialize ProjectBranchingModelProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                projectBranchingModelProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        projectBranchingModelProperties.AdditionalProperties.Clear();
        return new ProjectBranchingModel
        {
            ObjectModel = objectModel,
            ProjectBranchingModelProperties = projectBranchingModelProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, ProjectBranchingModel value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.ProjectBranchingModelProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
