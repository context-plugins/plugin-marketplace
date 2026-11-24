using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, branching_model.
/// </summary>
[JsonConverter(typeof(BranchingModelConverter))]
public record BranchingModel
{
    public required ObjectModel ObjectModel { get; init; }

    public required BranchingModelProperties BranchingModelProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out BranchingModelProperties branchingModelProperties)
    {
        objectModel = ObjectModel;
        branchingModelProperties = BranchingModelProperties;
    }

    public static implicit operator ObjectModel(BranchingModel value) => value.ObjectModel;

    public static implicit operator BranchingModelProperties(BranchingModel value) => value.BranchingModelProperties;
}

file class BranchingModelConverter : JsonConverter<BranchingModel>
{
    public override BranchingModel Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var branchingModelProperties = root.Deserialize<BranchingModelProperties>(options) ??
            throw new JsonException("Failed to deserialize BranchingModelProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                branchingModelProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        branchingModelProperties.AdditionalProperties.Clear();
        return new BranchingModel
        {
            ObjectModel = objectModel,
            BranchingModelProperties = branchingModelProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, BranchingModel value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.BranchingModelProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
