using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Core.Validation.Attributes;
using Applike.Models.Enums;

namespace Applike.Models;

public record AppOutput
{
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("bundleId")]
    [MinLength(1)]
    public required string BundleId { get; init; }

    /// <summary>
    /// justtrack's internal ID for the app
    /// </summary>
    [JsonPropertyName("id")]
    [Minimum(1)]
    public required int Id { get; init; }

    /// <summary>
    /// the name given to this app
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// identifier of the platform
    /// </summary>
    [JsonPropertyName("platform")]
    public required RequiredPlatform Platform { get; init; }

    [JsonPropertyName("storeId")]
    [MinLength(1)]
    public required string StoreId { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
