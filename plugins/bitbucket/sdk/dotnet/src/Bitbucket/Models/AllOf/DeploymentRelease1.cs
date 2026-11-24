using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, deployment_release1.
/// </summary>
[JsonConverter(typeof(DeploymentRelease1Converter))]
public record DeploymentRelease1
{
    public required ObjectModel ObjectModel { get; init; }

    public required DeploymentRelease1Properties DeploymentRelease1Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out DeploymentRelease1Properties deploymentRelease1Properties)
    {
        objectModel = ObjectModel;
        deploymentRelease1Properties = DeploymentRelease1Properties;
    }

    public static implicit operator ObjectModel(DeploymentRelease1 value) => value.ObjectModel;

    public static implicit operator DeploymentRelease1Properties(DeploymentRelease1 value) =>
        value.DeploymentRelease1Properties;
}

file class DeploymentRelease1Converter : JsonConverter<DeploymentRelease1>
{
    public override DeploymentRelease1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var deploymentRelease1Properties = root.Deserialize<DeploymentRelease1Properties>(options) ??
            throw new JsonException("Failed to deserialize DeploymentRelease1Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                deploymentRelease1Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        deploymentRelease1Properties.AdditionalProperties.Clear();
        return new DeploymentRelease1
        {
            ObjectModel = objectModel,
            DeploymentRelease1Properties = deploymentRelease1Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, DeploymentRelease1 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.DeploymentRelease1Properties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
