using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record Account
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("provider")]
    public required Provider1 Provider { get; init; }

    /// <summary>
    /// The account's display name — also the exact value a removal must confirm with.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// True when the key's project currently uses this account.
    /// </summary>
    [JsonPropertyName("selected")]
    public required bool Selected { get; init; }

    [JsonPropertyName("projectCount")]
    public required int ProjectCount { get; init; }

    [JsonPropertyName("formDestinationCount")]
    public required int FormDestinationCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
