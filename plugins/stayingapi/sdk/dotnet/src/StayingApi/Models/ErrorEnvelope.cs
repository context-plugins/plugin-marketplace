using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

public record ErrorEnvelope
{
    /// <summary>
    /// The canonical error object (§6.4). <c>code</c> is the SINGLE source of truth for error sub-codes.
    /// </summary>
    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
