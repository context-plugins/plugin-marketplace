using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, pullrequest.
/// </summary>
[JsonConverter(typeof(PullrequestConverter))]
public record Pullrequest
{
    public required ObjectModel ObjectModel { get; init; }

    public required PullrequestProperties PullrequestProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out PullrequestProperties pullrequestProperties)
    {
        objectModel = ObjectModel;
        pullrequestProperties = PullrequestProperties;
    }

    public static implicit operator ObjectModel(Pullrequest value) => value.ObjectModel;

    public static implicit operator PullrequestProperties(Pullrequest value) => value.PullrequestProperties;
}

file class PullrequestConverter : JsonConverter<Pullrequest>
{
    public override Pullrequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var pullrequestProperties = root.Deserialize<PullrequestProperties>(options) ??
            throw new JsonException("Failed to deserialize PullrequestProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, pullrequestProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        pullrequestProperties.AdditionalProperties.Clear();
        return new Pullrequest
        {
            ObjectModel = objectModel,
            PullrequestProperties = pullrequestProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Pullrequest value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.PullrequestProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
