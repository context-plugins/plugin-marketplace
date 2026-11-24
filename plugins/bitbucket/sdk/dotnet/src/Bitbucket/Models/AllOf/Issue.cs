using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, issue.
/// </summary>
[JsonConverter(typeof(IssueConverter))]
public record Issue
{
    public required ObjectModel ObjectModel { get; init; }

    public required IssueProperties IssueProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out IssueProperties issueProperties)
    {
        objectModel = ObjectModel;
        issueProperties = IssueProperties;
    }

    public static implicit operator ObjectModel(Issue value) => value.ObjectModel;

    public static implicit operator IssueProperties(Issue value) => value.IssueProperties;
}

file class IssueConverter : JsonConverter<Issue>
{
    public override Issue Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var issueProperties = root.Deserialize<IssueProperties>(options) ??
            throw new JsonException("Failed to deserialize IssueProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, issueProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        issueProperties.AdditionalProperties.Clear();
        return new Issue
        {
            ObjectModel = objectModel,
            IssueProperties = issueProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Issue value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.IssueProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
