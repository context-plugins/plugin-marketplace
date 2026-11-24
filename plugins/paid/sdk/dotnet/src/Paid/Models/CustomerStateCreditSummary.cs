using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerStateCreditSummary
{
    [JsonPropertyName("balances")]
    public required IReadOnlyList<CustomerStateCreditBalance> Balances { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
