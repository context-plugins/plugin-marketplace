using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record LinksConnectionsApi
{
    /// <summary>
    /// transactions link to the transactions associated with this account
    /// </summary>
    [JsonPropertyName("transactions")]
    public required string Transactions { get; init; }

    /// <summary>
    /// self link to the requested account
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
