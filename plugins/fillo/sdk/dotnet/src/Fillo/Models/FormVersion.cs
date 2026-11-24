using System;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record FormVersion
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("version")]
    public required int Version { get; init; }

    [JsonPropertyName("schemaHash")]
    public required string SchemaHash { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
