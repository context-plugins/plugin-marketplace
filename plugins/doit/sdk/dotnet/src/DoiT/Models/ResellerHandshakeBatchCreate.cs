using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ResellerHandshakeBatchCreate
{
    /// <summary>
    /// The distributor's program management account (DPMA) ID issuing the handshakes.
    /// </summary>
    [JsonPropertyName("dpmaId")]
    public required string DpmaId { get; init; }

    /// <summary>
    /// If <c>true</c>, issues a new AWS Organizations handshake for each item without an existing one. If omitted or <c>false</c>, maps the batch in place without issuing any AWS Organizations handshakes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sendHandshakes")]
    public bool? SendHandshakes { get; init; } = false;

    /// <summary>
    /// Batch items. Duplicate <c>resellerPmaAccountId</c> values within the batch are rejected.
    /// </summary>
    [JsonPropertyName("items")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<ResellerHandshakeItem> Items { get; init; }
}
