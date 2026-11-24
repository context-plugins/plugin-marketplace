using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, deploy_key.
/// </summary>
[JsonConverter(typeof(DeployKeyConverter))]
public record DeployKey
{
    public required ObjectModel ObjectModel { get; init; }

    public required DeployKeyProperties DeployKeyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out DeployKeyProperties deployKeyProperties)
    {
        objectModel = ObjectModel;
        deployKeyProperties = DeployKeyProperties;
    }

    public static implicit operator ObjectModel(DeployKey value) => value.ObjectModel;

    public static implicit operator DeployKeyProperties(DeployKey value) => value.DeployKeyProperties;
}

file class DeployKeyConverter : JsonConverter<DeployKey>
{
    public override DeployKey Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var deployKeyProperties = root.Deserialize<DeployKeyProperties>(options) ??
            throw new JsonException("Failed to deserialize DeployKeyProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, deployKeyProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        deployKeyProperties.AdditionalProperties.Clear();
        return new DeployKey
        {
            ObjectModel = objectModel,
            DeployKeyProperties = deployKeyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, DeployKey value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.DeployKeyProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
