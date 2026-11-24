using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AwsOrganizationServiceSettings
{
    /// <summary>
    /// Commitment type these settings apply to.
    /// </summary>
    [JsonPropertyName("service")]
    public required Service1 Service { get; init; }

    /// <summary>
    /// Commitment settings for this commitment type.
    /// </summary>
    [JsonPropertyName("settings")]
    public required AwsOrganizationSettings Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
