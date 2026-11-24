using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, group.
/// </summary>
[JsonConverter(typeof(GroupConverter))]
public record Group
{
    public required ObjectModel ObjectModel { get; init; }

    public required GroupProperties GroupProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out GroupProperties groupProperties)
    {
        objectModel = ObjectModel;
        groupProperties = GroupProperties;
    }

    public static implicit operator ObjectModel(Group value) => value.ObjectModel;

    public static implicit operator GroupProperties(Group value) => value.GroupProperties;
}

file class GroupConverter : JsonConverter<Group>
{
    public override Group Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var groupProperties = root.Deserialize<GroupProperties>(options) ??
            throw new JsonException("Failed to deserialize GroupProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, groupProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        groupProperties.AdditionalProperties.Clear();
        return new Group
        {
            ObjectModel = objectModel,
            GroupProperties = groupProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Group value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.GroupProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
