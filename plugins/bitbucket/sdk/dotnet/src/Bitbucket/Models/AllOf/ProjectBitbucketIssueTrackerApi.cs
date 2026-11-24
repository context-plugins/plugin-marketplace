using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, project_Bitbucket Issue tracker API.
/// </summary>
[JsonConverter(typeof(ProjectBitbucketIssueTrackerApiConverter))]
public record ProjectBitbucketIssueTrackerApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required ProjectBitbucketIssueTrackerApiProperties ProjectBitbucketIssueTrackerApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out ProjectBitbucketIssueTrackerApiProperties projectBitbucketIssueTrackerApiProperties)
    {
        objectModel = ObjectModel;
        projectBitbucketIssueTrackerApiProperties = ProjectBitbucketIssueTrackerApiProperties;
    }

    public static implicit operator ObjectModel(ProjectBitbucketIssueTrackerApi value) => value.ObjectModel;

    public static implicit operator ProjectBitbucketIssueTrackerApiProperties(ProjectBitbucketIssueTrackerApi value) =>
        value.ProjectBitbucketIssueTrackerApiProperties;
}

file class ProjectBitbucketIssueTrackerApiConverter : JsonConverter<ProjectBitbucketIssueTrackerApi>
{
    public override ProjectBitbucketIssueTrackerApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var projectBitbucketIssueTrackerApiProperties = root.Deserialize<ProjectBitbucketIssueTrackerApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize ProjectBitbucketIssueTrackerApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                projectBitbucketIssueTrackerApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        projectBitbucketIssueTrackerApiProperties.AdditionalProperties.Clear();
        return new ProjectBitbucketIssueTrackerApi
        {
            ObjectModel = objectModel,
            ProjectBitbucketIssueTrackerApiProperties = projectBitbucketIssueTrackerApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        ProjectBitbucketIssueTrackerApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.ProjectBitbucketIssueTrackerApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
