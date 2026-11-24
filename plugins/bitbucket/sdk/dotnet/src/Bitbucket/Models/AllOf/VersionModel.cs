using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, version.
/// </summary>
[JsonConverter(typeof(VersionModelConverter))]
public record VersionModel
{
    public required ObjectModel ObjectModel { get; init; }

    public required VersionProperties VersionProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out VersionProperties versionProperties)
    {
        objectModel = ObjectModel;
        versionProperties = VersionProperties;
    }

    public static implicit operator ObjectModel(VersionModel value) => value.ObjectModel;

    public static implicit operator VersionProperties(VersionModel value) => value.VersionProperties;
}

file class VersionModelConverter : JsonConverter<VersionModel>
{
    public override VersionModel Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var versionProperties = root.Deserialize<VersionProperties>(options) ??
            throw new JsonException("Failed to deserialize VersionProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, versionProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        versionProperties.AdditionalProperties.Clear();
        return new VersionModel
        {
            ObjectModel = objectModel,
            VersionProperties = versionProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, VersionModel value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.VersionProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
