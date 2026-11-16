using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record MerchantProcessor
{
    /// <summary>
    /// The name of the processor you plan to onboard users to.
    /// </summary>
    [JsonPropertyName("processor")]
    public required string Processor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
