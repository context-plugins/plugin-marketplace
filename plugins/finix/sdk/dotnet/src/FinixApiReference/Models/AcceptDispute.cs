using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record AcceptDispute
{
    /// <summary>
    /// Include a note or custom metadata to reference the <c>Dispute</c>.
    /// </summary>
    [JsonPropertyName("note")]
    public required string Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
