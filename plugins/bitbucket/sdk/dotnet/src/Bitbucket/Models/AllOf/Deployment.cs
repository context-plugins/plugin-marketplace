using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, deployment.
/// </summary>
[JsonConverter(typeof(DeploymentConverter))]
public record Deployment
{
    public required ObjectModel ObjectModel { get; init; }

    public required DeploymentProperties DeploymentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out DeploymentProperties deploymentProperties)
    {
        objectModel = ObjectModel;
        deploymentProperties = DeploymentProperties;
    }

    public static implicit operator ObjectModel(Deployment value) => value.ObjectModel;

    public static implicit operator DeploymentProperties(Deployment value) => value.DeploymentProperties;
}

file class DeploymentConverter : JsonConverter<Deployment>
{
    public override Deployment Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var deploymentProperties = root.Deserialize<DeploymentProperties>(options) ??
            throw new JsonException("Failed to deserialize DeploymentProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, deploymentProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        deploymentProperties.AdditionalProperties.Clear();
        return new Deployment
        {
            ObjectModel = objectModel,
            DeploymentProperties = deploymentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Deployment value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.DeploymentProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
