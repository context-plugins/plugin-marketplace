using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of ssh_key, object, ssh_account_key.
/// </summary>
[JsonConverter(typeof(SshAccountKeyConverter))]
public record SshAccountKey
{
    public required SshKey SshKey { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required SshAccountKeyProperties SshAccountKeyProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out SshKey sshKey,
        out ObjectModel objectModel,
        out SshAccountKeyProperties sshAccountKeyProperties)
    {
        sshKey = SshKey;
        objectModel = ObjectModel;
        sshAccountKeyProperties = SshAccountKeyProperties;
    }

    public static implicit operator SshKey(SshAccountKey value) => value.SshKey;

    public static implicit operator ObjectModel(SshAccountKey value) => value.ObjectModel;

    public static implicit operator SshAccountKeyProperties(SshAccountKey value) => value.SshAccountKeyProperties;
}

file class SshAccountKeyConverter : JsonConverter<SshAccountKey>
{
    public override SshAccountKey Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var sshKey = root.Deserialize<SshKey>(options) ?? throw new JsonException("Failed to deserialize SshKey");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var sshAccountKeyProperties = root.Deserialize<SshAccountKeyProperties>(options) ??
            throw new JsonException("Failed to deserialize SshAccountKeyProperties");
        var extras =
            AdditionalProperties.SharedBy(
                sshKey.AdditionalProperties,
                objectModel.AdditionalProperties,
                sshAccountKeyProperties.AdditionalProperties);
        sshKey.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        sshAccountKeyProperties.AdditionalProperties.Clear();
        return new SshAccountKey
        {
            SshKey = sshKey,
            ObjectModel = objectModel,
            SshAccountKeyProperties = sshAccountKeyProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, SshAccountKey value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.SshKey, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.SshAccountKeyProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
