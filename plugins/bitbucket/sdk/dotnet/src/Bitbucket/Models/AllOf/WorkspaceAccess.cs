using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, workspace_access.
/// </summary>
[JsonConverter(typeof(WorkspaceAccessConverter))]
public record WorkspaceAccess
{
    public required ObjectModel ObjectModel { get; init; }

    public required WorkspaceAccessProperties WorkspaceAccessProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out WorkspaceAccessProperties workspaceAccessProperties)
    {
        objectModel = ObjectModel;
        workspaceAccessProperties = WorkspaceAccessProperties;
    }

    public static implicit operator ObjectModel(WorkspaceAccess value) => value.ObjectModel;

    public static implicit operator WorkspaceAccessProperties(WorkspaceAccess value) => value.WorkspaceAccessProperties;
}

file class WorkspaceAccessConverter : JsonConverter<WorkspaceAccess>
{
    public override WorkspaceAccess Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var workspaceAccessProperties = root.Deserialize<WorkspaceAccessProperties>(options) ??
            throw new JsonException("Failed to deserialize WorkspaceAccessProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                workspaceAccessProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        workspaceAccessProperties.AdditionalProperties.Clear();
        return new WorkspaceAccess
        {
            ObjectModel = objectModel,
            WorkspaceAccessProperties = workspaceAccessProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, WorkspaceAccess value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.WorkspaceAccessProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
