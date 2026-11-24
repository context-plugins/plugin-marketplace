using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, group_Bitbucket Repositories API.
/// </summary>
[JsonConverter(typeof(GroupBitbucketRepositoriesApiConverter))]
public record GroupBitbucketRepositoriesApi
{
    public required ObjectModel ObjectModel { get; init; }

    public required GroupBitbucketRepositoriesApiProperties GroupBitbucketRepositoriesApiProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out GroupBitbucketRepositoriesApiProperties groupBitbucketRepositoriesApiProperties)
    {
        objectModel = ObjectModel;
        groupBitbucketRepositoriesApiProperties = GroupBitbucketRepositoriesApiProperties;
    }

    public static implicit operator ObjectModel(GroupBitbucketRepositoriesApi value) => value.ObjectModel;

    public static implicit operator GroupBitbucketRepositoriesApiProperties(GroupBitbucketRepositoriesApi value) =>
        value.GroupBitbucketRepositoriesApiProperties;
}

file class GroupBitbucketRepositoriesApiConverter : JsonConverter<GroupBitbucketRepositoriesApi>
{
    public override GroupBitbucketRepositoriesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var groupBitbucketRepositoriesApiProperties = root.Deserialize<GroupBitbucketRepositoriesApiProperties>(
            options) ??
            throw new JsonException("Failed to deserialize GroupBitbucketRepositoriesApiProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                groupBitbucketRepositoriesApiProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        groupBitbucketRepositoriesApiProperties.AdditionalProperties.Clear();
        return new GroupBitbucketRepositoriesApi
        {
            ObjectModel = objectModel,
            GroupBitbucketRepositoriesApiProperties = groupBitbucketRepositoriesApiProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer,
        GroupBitbucketRepositoriesApi value,
        JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.GroupBitbucketRepositoriesApiProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
