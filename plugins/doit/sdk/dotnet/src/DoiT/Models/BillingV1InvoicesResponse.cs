using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record BillingV1InvoicesResponse
{
    /// <summary>
    /// Array of Invoices
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoices")]
    public IReadOnlyList<InvoiceListItem>? Invoices { get; init; }

    /// <summary>
    /// Page token. Can be used to request the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Invoice rows count
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public long? RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
