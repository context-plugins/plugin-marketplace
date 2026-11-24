using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1PurchasesResponse
{
    /// <summary>
    /// List of purchased DID numbers
    /// </summary>
    [JsonPropertyName("purchases")]
    public required IReadOnlyList<PurchaseDidlogicComPurchasesApi> Purchases { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationDidlogicComPurchasesApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
