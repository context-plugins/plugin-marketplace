using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, ssh_key.
/// </summary>
[JsonConverter(typeof(SshKeyConverter))]
public record SshKey
{
    public required ObjectModel ObjectModel { get; init; }

    public required SshKeyProperties SshKeyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out SshKeyProperties sshKeyProperties)
    {
        objectModel = ObjectModel;
        sshKeyProperties = SshKeyProperties;
    }

    public static implicit operator ObjectModel(SshKey value) => value.ObjectModel;

    public static implicit operator SshKeyProperties(SshKey value) => value.SshKeyProperties;
}

file class SshKeyConverter : JsonConverter<SshKey>
{
    public override SshKey Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var sshKeyProperties = root.Deserialize<SshKeyProperties>(options) ??
            throw new JsonException("Failed to deserialize SshKeyProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, sshKeyProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        sshKeyProperties.AdditionalProperties.Clear();
        return new SshKey
        {
            ObjectModel = objectModel,
            SshKeyProperties = sshKeyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, SshKey value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.SshKeyProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
