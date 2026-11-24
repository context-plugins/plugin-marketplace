using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreditBalanceListResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<CreditBalance> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
