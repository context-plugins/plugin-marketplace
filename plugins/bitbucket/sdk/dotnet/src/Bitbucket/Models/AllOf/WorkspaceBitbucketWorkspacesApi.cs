using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, workspace_Bitbucket Workspaces API.
/// </summary>
[JsonConverter(typeof(WorkspaceBitbucketWorkspacesApiConverter))]
public record WorkspaceBitbucketWorkspacesApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required WorkspaceBitbucketWorkspacesApiProperties WorkspaceBitbucketWorkspacesApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out WorkspaceBitbucketWorkspacesApiProperties workspaceBitbucketWorkspacesApiProperties)
    {
        objectModel = ObjectModel;
        workspaceBitbucketWorkspacesApiProperties = WorkspaceBitbucketWorkspacesApiProperties;
    }

    public static implicit operator ObjectModel(WorkspaceBitbucketWorkspacesApi value) => value.ObjectModel;

    public static implicit operator WorkspaceBitbucketWorkspacesApiProperties(WorkspaceBitbucketWorkspacesApi value) =>
        value.WorkspaceBitbucketWorkspacesApiProperties;
}

file class WorkspaceBitbucketWorkspacesApiConverter : JsonConverter<WorkspaceBitbucketWorkspacesApi>
{
    public override WorkspaceBitbucketWorkspacesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var workspaceBitbucketWorkspacesApiProperties = root.Deserialize<WorkspaceBitbucketWorkspacesApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize WorkspaceBitbucketWorkspacesApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                workspaceBitbucketWorkspacesApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        workspaceBitbucketWorkspacesApiProperties.AdditionalProperties.Clear();
        return new WorkspaceBitbucketWorkspacesApi
        {
            ObjectModel = objectModel,
            WorkspaceBitbucketWorkspacesApiProperties = workspaceBitbucketWorkspacesApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        WorkspaceBitbucketWorkspacesApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.WorkspaceBitbucketWorkspacesApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
