using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, workspace_membership.
/// </summary>
[JsonConverter(typeof(WorkspaceMembershipConverter))]
public record WorkspaceMembership
{
    public required ObjectModel ObjectModel { get; init; }

    public required WorkspaceMembershipProperties WorkspaceMembershipProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out WorkspaceMembershipProperties workspaceMembershipProperties)
    {
        objectModel = ObjectModel;
        workspaceMembershipProperties = WorkspaceMembershipProperties;
    }

    public static implicit operator ObjectModel(WorkspaceMembership value) => value.ObjectModel;

    public static implicit operator WorkspaceMembershipProperties(WorkspaceMembership value) =>
        value.WorkspaceMembershipProperties;
}

file class WorkspaceMembershipConverter : JsonConverter<WorkspaceMembership>
{
    public override WorkspaceMembership Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var workspaceMembershipProperties = root.Deserialize<WorkspaceMembershipProperties>(options) ??
            throw new JsonException("Failed to deserialize WorkspaceMembershipProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                workspaceMembershipProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        workspaceMembershipProperties.AdditionalProperties.Clear();
        return new WorkspaceMembership
        {
            ObjectModel = objectModel,
            WorkspaceMembershipProperties = workspaceMembershipProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, WorkspaceMembership value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.WorkspaceMembershipProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
