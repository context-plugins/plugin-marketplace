using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, snippet.
/// </summary>
[JsonConverter(typeof(SnippetConverter))]
public record Snippet
{
    public required ObjectModel ObjectModel { get; init; }

    public required SnippetProperties SnippetProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out SnippetProperties snippetProperties)
    {
        objectModel = ObjectModel;
        snippetProperties = SnippetProperties;
    }

    public static implicit operator ObjectModel(Snippet value) => value.ObjectModel;

    public static implicit operator SnippetProperties(Snippet value) => value.SnippetProperties;
}

file class SnippetConverter : JsonConverter<Snippet>
{
    public override Snippet Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var snippetProperties = root.Deserialize<SnippetProperties>(options) ??
            throw new JsonException("Failed to deserialize SnippetProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, snippetProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        snippetProperties.AdditionalProperties.Clear();
        return new Snippet
        {
            ObjectModel = objectModel,
            SnippetProperties = snippetProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Snippet value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.SnippetProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
