using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Models.Enums;

namespace Instacart.Models;

public record ReplacementDecisionRequest
{
    /// <summary>
    /// The customer's decision on the replacement. APPROVED accepts the replacement. REJECTED declines the replacement and triggers an automatic refund.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusInstacartConnectPostCheckoutReplacementsApi Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
