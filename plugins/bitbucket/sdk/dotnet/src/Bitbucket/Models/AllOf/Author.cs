using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, author.
/// </summary>
[JsonConverter(typeof(AuthorConverter))]
public record Author
{
    public required ObjectModel ObjectModel { get; init; }

    public required AuthorProperties AuthorProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out AuthorProperties authorProperties)
    {
        objectModel = ObjectModel;
        authorProperties = AuthorProperties;
    }

    public static implicit operator ObjectModel(Author value) => value.ObjectModel;

    public static implicit operator AuthorProperties(Author value) => value.AuthorProperties;
}

file class AuthorConverter : JsonConverter<Author>
{
    public override Author Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var authorProperties = root.Deserialize<AuthorProperties>(options) ??
            throw new JsonException("Failed to deserialize AuthorProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, authorProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        authorProperties.AdditionalProperties.Clear();
        return new Author
        {
            ObjectModel = objectModel,
            AuthorProperties = authorProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Author value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.AuthorProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
