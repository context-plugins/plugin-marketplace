using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, workspace_base.
/// </summary>
[JsonConverter(typeof(WorkspaceBaseConverter))]
public record WorkspaceBase
{
    public required ObjectModel ObjectModel { get; init; }

    public required WorkspaceBaseProperties WorkspaceBaseProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out WorkspaceBaseProperties workspaceBaseProperties)
    {
        objectModel = ObjectModel;
        workspaceBaseProperties = WorkspaceBaseProperties;
    }

    public static implicit operator ObjectModel(WorkspaceBase value) => value.ObjectModel;

    public static implicit operator WorkspaceBaseProperties(WorkspaceBase value) => value.WorkspaceBaseProperties;
}

file class WorkspaceBaseConverter : JsonConverter<WorkspaceBase>
{
    public override WorkspaceBase Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var workspaceBaseProperties = root.Deserialize<WorkspaceBaseProperties>(options) ??
            throw new JsonException("Failed to deserialize WorkspaceBaseProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                workspaceBaseProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        workspaceBaseProperties.AdditionalProperties.Clear();
        return new WorkspaceBase
        {
            ObjectModel = objectModel,
            WorkspaceBaseProperties = workspaceBaseProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, WorkspaceBase value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.WorkspaceBaseProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
