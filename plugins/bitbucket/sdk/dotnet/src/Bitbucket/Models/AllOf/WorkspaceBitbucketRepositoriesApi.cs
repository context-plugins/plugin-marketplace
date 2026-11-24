using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, workspace_Bitbucket Repositories API.
/// </summary>
[JsonConverter(typeof(WorkspaceBitbucketRepositoriesApiConverter))]
public record WorkspaceBitbucketRepositoriesApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required WorkspaceBitbucketRepositoriesApiProperties WorkspaceBitbucketRepositoriesApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out WorkspaceBitbucketRepositoriesApiProperties workspaceBitbucketRepositoriesApiProperties)
    {
        objectModel = ObjectModel;
        workspaceBitbucketRepositoriesApiProperties = WorkspaceBitbucketRepositoriesApiProperties;
    }

    public static implicit operator ObjectModel(WorkspaceBitbucketRepositoriesApi value) => value.ObjectModel;

    public static implicit operator WorkspaceBitbucketRepositoriesApiProperties(WorkspaceBitbucketRepositoriesApi value) =>
        value.WorkspaceBitbucketRepositoriesApiProperties;
}

file class WorkspaceBitbucketRepositoriesApiConverter : JsonConverter<WorkspaceBitbucketRepositoriesApi>
{
    public override WorkspaceBitbucketRepositoriesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var workspaceBitbucketRepositoriesApiProperties = root.Deserialize<WorkspaceBitbucketRepositoriesApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize WorkspaceBitbucketRepositoriesApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                workspaceBitbucketRepositoriesApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        workspaceBitbucketRepositoriesApiProperties.AdditionalProperties.Clear();
        return new WorkspaceBitbucketRepositoriesApi
        {
            ObjectModel = objectModel,
            WorkspaceBitbucketRepositoriesApiProperties = workspaceBitbucketRepositoriesApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        WorkspaceBitbucketRepositoriesApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.WorkspaceBitbucketRepositoriesApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
