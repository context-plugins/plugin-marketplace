using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, branching_model_settings.
/// </summary>
[JsonConverter(typeof(BranchingModelSettingsConverter))]
public record BranchingModelSettings
{
    public required ObjectModel ObjectModel { get; init; }

    public required BranchingModelSettingsProperties BranchingModelSettingsProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out BranchingModelSettingsProperties branchingModelSettingsProperties)
    {
        objectModel = ObjectModel;
        branchingModelSettingsProperties = BranchingModelSettingsProperties;
    }

    public static implicit operator ObjectModel(BranchingModelSettings value) => value.ObjectModel;

    public static implicit operator BranchingModelSettingsProperties(BranchingModelSettings value) =>
        value.BranchingModelSettingsProperties;
}

file class BranchingModelSettingsConverter : JsonConverter<BranchingModelSettings>
{
    public override BranchingModelSettings Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var branchingModelSettingsProperties = root.Deserialize<BranchingModelSettingsProperties>(options) ??
            throw new JsonException("Failed to deserialize BranchingModelSettingsProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                branchingModelSettingsProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        branchingModelSettingsProperties.AdditionalProperties.Clear();
        return new BranchingModelSettings
        {
            ObjectModel = objectModel,
            BranchingModelSettingsProperties = branchingModelSettingsProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, BranchingModelSettings value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.BranchingModelSettingsProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
