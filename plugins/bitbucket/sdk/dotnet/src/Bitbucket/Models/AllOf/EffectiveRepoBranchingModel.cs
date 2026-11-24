using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, effective_repo_branching_model.
/// </summary>
[JsonConverter(typeof(EffectiveRepoBranchingModelConverter))]
public record EffectiveRepoBranchingModel
{
    public required ObjectModel ObjectModel { get; init; }

    public required EffectiveRepoBranchingModelProperties EffectiveRepoBranchingModelProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out EffectiveRepoBranchingModelProperties effectiveRepoBranchingModelProperties)
    {
        objectModel = ObjectModel;
        effectiveRepoBranchingModelProperties = EffectiveRepoBranchingModelProperties;
    }

    public static implicit operator ObjectModel(EffectiveRepoBranchingModel value) => value.ObjectModel;

    public static implicit operator EffectiveRepoBranchingModelProperties(EffectiveRepoBranchingModel value) =>
        value.EffectiveRepoBranchingModelProperties;
}

file class EffectiveRepoBranchingModelConverter : JsonConverter<EffectiveRepoBranchingModel>
{
    public override EffectiveRepoBranchingModel Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var effectiveRepoBranchingModelProperties = root.Deserialize<EffectiveRepoBranchingModelProperties>(options) ??
            throw new JsonException("Failed to deserialize EffectiveRepoBranchingModelProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                effectiveRepoBranchingModelProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        effectiveRepoBranchingModelProperties.AdditionalProperties.Clear();
        return new EffectiveRepoBranchingModel
        {
            ObjectModel = objectModel,
            EffectiveRepoBranchingModelProperties = effectiveRepoBranchingModelProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, EffectiveRepoBranchingModel value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.EffectiveRepoBranchingModelProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
