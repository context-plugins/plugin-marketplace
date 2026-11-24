using System.Text.Json.Serialization;
using Applike.Core.Models;
using Applike.Core.Validation.Attributes;

namespace Applike.Models;

public record RequiredPage
{
    /// <summary>
    /// The number of resources to skip for this filter
    /// </summary>
    [JsonPropertyName("offset")]
    [Minimum(0)]
    public required int Offset { get; init; }

    /// <summary>
    /// The maximum number of resources in a page. If set to 0, we default to a limit of 100.
    /// </summary>
    [JsonPropertyName("limit")]
    [Minimum(0)]
    [Maximum(1000)]
    public required int Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
