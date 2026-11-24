using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record PaginationDidlogicComPurchasesApi
{
    [JsonPropertyName("pages")]
    public required int Pages { get; init; }

    [JsonPropertyName("page")]
    public required int Page { get; init; }

    [JsonPropertyName("total_records")]
    public required int TotalRecords { get; init; }

    [JsonPropertyName("per_page")]
    public required int PerPage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
