using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of base_commit, object, commit2.
/// </summary>
[JsonConverter(typeof(Commit2Converter))]
public record Commit2
{
    public required BaseCommit BaseCommit { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required Commit2Properties Commit2Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out BaseCommit baseCommit,
        out ObjectModel objectModel,
        out Commit2Properties commit2Properties)
    {
        baseCommit = BaseCommit;
        objectModel = ObjectModel;
        commit2Properties = Commit2Properties;
    }

    public static implicit operator BaseCommit(Commit2 value) => value.BaseCommit;

    public static implicit operator ObjectModel(Commit2 value) => value.ObjectModel;

    public static implicit operator Commit2Properties(Commit2 value) => value.Commit2Properties;
}

file class Commit2Converter : JsonConverter<Commit2>
{
    public override Commit2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var baseCommit = root.Deserialize<BaseCommit>(options) ??
            throw new JsonException("Failed to deserialize BaseCommit");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var commit2Properties = root.Deserialize<Commit2Properties>(options) ??
            throw new JsonException("Failed to deserialize Commit2Properties");
        var extras =
            AdditionalProperties.SharedBy(
                baseCommit.AdditionalProperties,
                objectModel.AdditionalProperties,
                commit2Properties.AdditionalProperties);
        baseCommit.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        commit2Properties.AdditionalProperties.Clear();
        return new Commit2
        {
            BaseCommit = baseCommit,
            ObjectModel = objectModel,
            Commit2Properties = commit2Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Commit2 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.BaseCommit, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.Commit2Properties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
