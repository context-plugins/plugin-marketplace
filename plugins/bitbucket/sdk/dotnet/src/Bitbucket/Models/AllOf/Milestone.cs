using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, milestone.
/// </summary>
[JsonConverter(typeof(MilestoneConverter))]
public record Milestone
{
    public required ObjectModel ObjectModel { get; init; }

    public required MilestoneProperties MilestoneProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out MilestoneProperties milestoneProperties)
    {
        objectModel = ObjectModel;
        milestoneProperties = MilestoneProperties;
    }

    public static implicit operator ObjectModel(Milestone value) => value.ObjectModel;

    public static implicit operator MilestoneProperties(Milestone value) => value.MilestoneProperties;
}

file class MilestoneConverter : JsonConverter<Milestone>
{
    public override Milestone Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var milestoneProperties = root.Deserialize<MilestoneProperties>(options) ??
            throw new JsonException("Failed to deserialize MilestoneProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, milestoneProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        milestoneProperties.AdditionalProperties.Clear();
        return new Milestone
        {
            ObjectModel = objectModel,
            MilestoneProperties = milestoneProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Milestone value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.MilestoneProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
