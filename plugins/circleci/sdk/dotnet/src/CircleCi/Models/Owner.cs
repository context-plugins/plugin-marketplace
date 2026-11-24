using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record Owner
{
    /// <summary>
    /// The owner ID
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The owner type
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
