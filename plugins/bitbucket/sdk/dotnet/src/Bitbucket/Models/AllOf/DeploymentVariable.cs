using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, deployment_variable.
/// </summary>
[JsonConverter(typeof(DeploymentVariableConverter))]
public record DeploymentVariable
{
    public required ObjectModel ObjectModel { get; init; }

    public required DeploymentVariableProperties DeploymentVariableProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out DeploymentVariableProperties deploymentVariableProperties)
    {
        objectModel = ObjectModel;
        deploymentVariableProperties = DeploymentVariableProperties;
    }

    public static implicit operator ObjectModel(DeploymentVariable value) => value.ObjectModel;

    public static implicit operator DeploymentVariableProperties(DeploymentVariable value) =>
        value.DeploymentVariableProperties;
}

file class DeploymentVariableConverter : JsonConverter<DeploymentVariable>
{
    public override DeploymentVariable Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var deploymentVariableProperties = root.Deserialize<DeploymentVariableProperties>(options) ??
            throw new JsonException("Failed to deserialize DeploymentVariableProperties");
        var extras =
            AdditionalProperties.SharedBy(
                objectModel.AdditionalProperties,
                deploymentVariableProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        deploymentVariableProperties.AdditionalProperties.Clear();
        return new DeploymentVariable
        {
            ObjectModel = objectModel,
            DeploymentVariableProperties = deploymentVariableProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, DeploymentVariable value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.DeploymentVariableProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
