using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, deployment_environment1.
/// </summary>
[JsonConverter(typeof(DeploymentEnvironment1Converter))]
public record DeploymentEnvironment1
{
    public required ObjectModel ObjectModel { get; init; }

    public required DeploymentEnvironment1Properties DeploymentEnvironment1Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out DeploymentEnvironment1Properties deploymentEnvironment1Properties)
    {
        objectModel = ObjectModel;
        deploymentEnvironment1Properties = DeploymentEnvironment1Properties;
    }

    public static implicit operator ObjectModel(DeploymentEnvironment1 value) => value.ObjectModel;

    public static implicit operator DeploymentEnvironment1Properties(DeploymentEnvironment1 value) =>
        value.DeploymentEnvironment1Properties;
}

file class DeploymentEnvironment1Converter : JsonConverter<DeploymentEnvironment1>
{
    public override DeploymentEnvironment1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var deploymentEnvironment1Properties = root.Deserialize<DeploymentEnvironment1Properties>(options) ??
            throw new JsonException("Failed to deserialize DeploymentEnvironment1Properties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                deploymentEnvironment1Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        deploymentEnvironment1Properties.AdditionalProperties.Clear();
        return new DeploymentEnvironment1
        {
            ObjectModel = objectModel,
            DeploymentEnvironment1Properties = deploymentEnvironment1Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, DeploymentEnvironment1 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.DeploymentEnvironment1Properties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
