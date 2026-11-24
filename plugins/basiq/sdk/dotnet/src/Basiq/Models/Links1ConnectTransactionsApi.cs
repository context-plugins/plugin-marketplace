using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Links1ConnectTransactionsApi
{
    /// <summary>
    /// Self reference url.
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    /// <summary>
    /// URL to the next result page when there are more than 500 transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next")]
    public string? Next { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
