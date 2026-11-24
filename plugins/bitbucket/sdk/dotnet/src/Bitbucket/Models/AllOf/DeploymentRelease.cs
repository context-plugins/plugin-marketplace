using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, deployment_release.
/// </summary>
[JsonConverter(typeof(DeploymentReleaseConverter))]
public record DeploymentRelease
{
    public required ObjectModel ObjectModel { get; init; }

    public required DeploymentReleaseProperties DeploymentReleaseProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out DeploymentReleaseProperties deploymentReleaseProperties)
    {
        objectModel = ObjectModel;
        deploymentReleaseProperties = DeploymentReleaseProperties;
    }

    public static implicit operator ObjectModel(DeploymentRelease value) => value.ObjectModel;

    public static implicit operator DeploymentReleaseProperties(DeploymentRelease value) =>
        value.DeploymentReleaseProperties;
}

file class DeploymentReleaseConverter : JsonConverter<DeploymentRelease>
{
    public override DeploymentRelease Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var deploymentReleaseProperties = root.Deserialize<DeploymentReleaseProperties>(options) ??
            throw new JsonException("Failed to deserialize DeploymentReleaseProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                deploymentReleaseProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        deploymentReleaseProperties.AdditionalProperties.Clear();
        return new DeploymentRelease
        {
            ObjectModel = objectModel,
            DeploymentReleaseProperties = deploymentReleaseProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, DeploymentRelease value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.DeploymentReleaseProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
