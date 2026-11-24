using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record LinksAffordabilityIncomeApi
{
    /// <summary>
    /// Links of accounts
    /// </summary>
    [JsonPropertyName("accounts")]
    public required IReadOnlyList<string> Accounts { get; init; }

    /// <summary>
    /// Link to the requested income resource
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
