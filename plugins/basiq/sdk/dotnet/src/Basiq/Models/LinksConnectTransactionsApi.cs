using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record LinksConnectTransactionsApi
{
    /// <summary>
    /// Url of the account.
    /// </summary>
    [JsonPropertyName("account")]
    public required string Account { get; init; }

    /// <summary>
    /// Url of the institution.
    /// </summary>
    [JsonPropertyName("institution")]
    public required string Institution { get; init; }

    /// <summary>
    /// Transaction self reference.
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
