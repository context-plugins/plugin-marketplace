using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record EndCustomerMappingBatchResult
{
    [JsonPropertyName("dpmaId")]
    public required string DpmaId { get; init; }

    [JsonPropertyName("resellerPmaAccountId")]
    public required string ResellerPmaAccountId { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<EndCustomerMappingResult> Results { get; init; }

    /// <summary>
    /// Items rejected before processing. Omitted when every item passed validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invalidItems")]
    public IReadOnlyList<InvalidHandshakeItem>? InvalidItems { get; init; }
}
