using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, GPG_account_key.
/// </summary>
[JsonConverter(typeof(GpgAccountKeyConverter))]
public record GpgAccountKey
{
    public required ObjectModel ObjectModel { get; init; }

    public required GpgAccountKeyProperties GpgAccountKeyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out GpgAccountKeyProperties gpgAccountKeyProperties)
    {
        objectModel = ObjectModel;
        gpgAccountKeyProperties = GpgAccountKeyProperties;
    }

    public static implicit operator ObjectModel(GpgAccountKey value) => value.ObjectModel;

    public static implicit operator GpgAccountKeyProperties(GpgAccountKey value) => value.GpgAccountKeyProperties;
}

file class GpgAccountKeyConverter : JsonConverter<GpgAccountKey>
{
    public override GpgAccountKey Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var gpgAccountKeyProperties = root.Deserialize<GpgAccountKeyProperties>(options) ??
            throw new JsonException("Failed to deserialize GpgAccountKeyProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                gpgAccountKeyProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        gpgAccountKeyProperties.AdditionalProperties.Clear();
        return new GpgAccountKey
        {
            ObjectModel = objectModel,
            GpgAccountKeyProperties = gpgAccountKeyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, GpgAccountKey value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.GpgAccountKeyProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
