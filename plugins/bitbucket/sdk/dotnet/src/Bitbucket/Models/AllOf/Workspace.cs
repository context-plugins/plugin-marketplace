using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, workspace.
/// </summary>
[JsonConverter(typeof(WorkspaceConverter))]
public record Workspace
{
    public required ObjectModel ObjectModel { get; init; }

    public required WorkspaceProperties WorkspaceProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out WorkspaceProperties workspaceProperties)
    {
        objectModel = ObjectModel;
        workspaceProperties = WorkspaceProperties;
    }

    public static implicit operator ObjectModel(Workspace value) => value.ObjectModel;

    public static implicit operator WorkspaceProperties(Workspace value) => value.WorkspaceProperties;
}

file class WorkspaceConverter : JsonConverter<Workspace>
{
    public override Workspace Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var workspaceProperties = root.Deserialize<WorkspaceProperties>(options) ??
            throw new JsonException("Failed to deserialize WorkspaceProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, workspaceProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        workspaceProperties.AdditionalProperties.Clear();
        return new Workspace
        {
            ObjectModel = objectModel,
            WorkspaceProperties = workspaceProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Workspace value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.WorkspaceProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
