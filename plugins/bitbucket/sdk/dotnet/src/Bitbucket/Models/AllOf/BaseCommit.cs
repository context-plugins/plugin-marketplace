using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, base_commit.
/// </summary>
[JsonConverter(typeof(BaseCommitConverter))]
public record BaseCommit
{
    public required ObjectModel ObjectModel { get; init; }

    public required BaseCommitProperties BaseCommitProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out BaseCommitProperties baseCommitProperties)
    {
        objectModel = ObjectModel;
        baseCommitProperties = BaseCommitProperties;
    }

    public static implicit operator ObjectModel(BaseCommit value) => value.ObjectModel;

    public static implicit operator BaseCommitProperties(BaseCommit value) => value.BaseCommitProperties;
}

file class BaseCommitConverter : JsonConverter<BaseCommit>
{
    public override BaseCommit Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var baseCommitProperties = root.Deserialize<BaseCommitProperties>(options) ??
            throw new JsonException("Failed to deserialize BaseCommitProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, baseCommitProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        baseCommitProperties.AdditionalProperties.Clear();
        return new BaseCommit
        {
            ObjectModel = objectModel,
            BaseCommitProperties = baseCommitProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, BaseCommit value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.BaseCommitProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
