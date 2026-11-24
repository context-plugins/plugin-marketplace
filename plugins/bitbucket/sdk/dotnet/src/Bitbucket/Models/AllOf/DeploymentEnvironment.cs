using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, deployment_environment.
/// </summary>
[JsonConverter(typeof(DeploymentEnvironmentConverter))]
public record DeploymentEnvironment
{
    public required ObjectModel ObjectModel { get; init; }

    public required DeploymentEnvironmentProperties DeploymentEnvironmentProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel,
        out DeploymentEnvironmentProperties deploymentEnvironmentProperties)
    {
        objectModel = ObjectModel;
        deploymentEnvironmentProperties = DeploymentEnvironmentProperties;
    }

    public static implicit operator ObjectModel(DeploymentEnvironment value) => value.ObjectModel;

    public static implicit operator DeploymentEnvironmentProperties(DeploymentEnvironment value) =>
        value.DeploymentEnvironmentProperties;
}

file class DeploymentEnvironmentConverter : JsonConverter<DeploymentEnvironment>
{
    public override DeploymentEnvironment Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var deploymentEnvironmentProperties = root.Deserialize<DeploymentEnvironmentProperties>(options) ??
            throw new JsonException("Failed to deserialize DeploymentEnvironmentProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                deploymentEnvironmentProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        deploymentEnvironmentProperties.AdditionalProperties.Clear();
        return new DeploymentEnvironment
        {
            ObjectModel = objectModel,
            DeploymentEnvironmentProperties = deploymentEnvironmentProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, DeploymentEnvironment value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(
            JsonSerializer.SerializeToElement(value.DeploymentEnvironmentProperties, options),
            written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
