using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;
using Justtrack.Models.Enums;

namespace Justtrack.Models;

public record CreateAppRequest
{
    [JsonPropertyName("bundleId")]
    [MinLength(1)]
    public required string BundleId { get; init; }

    [JsonPropertyName("iconUrl")]
    [MinLength(1)]
    public required string IconUrl { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
