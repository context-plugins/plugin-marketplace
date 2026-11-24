using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record EnrichResponse
{
    /// <summary>
    /// Value is "enrich"
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Debit or Credit transaction
    /// </summary>
    [JsonPropertyName("direction")]
    public required string Direction { get; init; }

    /// <summary>
    /// For Debit: payment, bank-fee, cash-withdrawal, transfer, loan-interest. &lt;br/&gt; For Credit: refund, direct-credit, interest, transfer, loan-repayment.
    /// </summary>
    [JsonPropertyName("class")]
    public required string Class { get; init; }

    /// <summary>
    /// Container object, containing enrich details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public DataEnrichApi? Data { get; init; }

    [JsonPropertyName("links")]
    public required Links1EnrichApi Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
