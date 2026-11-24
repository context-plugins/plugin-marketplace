using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, branchrestriction.
/// </summary>
[JsonConverter(typeof(BranchrestrictionConverter))]
public record Branchrestriction
{
    public required ObjectModel ObjectModel { get; init; }

    public required BranchrestrictionProperties BranchrestrictionProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out BranchrestrictionProperties branchrestrictionProperties)
    {
        objectModel = ObjectModel;
        branchrestrictionProperties = BranchrestrictionProperties;
    }

    public static implicit operator ObjectModel(Branchrestriction value) => value.ObjectModel;

    public static implicit operator BranchrestrictionProperties(Branchrestriction value) =>
        value.BranchrestrictionProperties;
}

file class BranchrestrictionConverter : JsonConverter<Branchrestriction>
{
    public override Branchrestriction Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var branchrestrictionProperties = root.Deserialize<BranchrestrictionProperties>(options) ??
            throw new JsonException("Failed to deserialize BranchrestrictionProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                branchrestrictionProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        branchrestrictionProperties.AdditionalProperties.Clear();
        return new Branchrestriction
        {
            ObjectModel = objectModel,
            BranchrestrictionProperties = branchrestrictionProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Branchrestriction value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.BranchrestrictionProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
