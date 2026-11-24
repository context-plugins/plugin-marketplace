using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Object containing links to resources.
/// </summary>
public record GetUserLinks
{
    /// <summary>
    /// Accounts reference url.
    /// </summary>
    [JsonPropertyName("accounts")]
    public required string Accounts { get; init; }

    /// <summary>
    /// Connections reference url.
    /// </summary>
    [JsonPropertyName("connections")]
    public required string Connections { get; init; }

    /// <summary>
    /// User self reference url.
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    /// <summary>
    /// Transactions reference url.
    /// </summary>
    [JsonPropertyName("transactions")]
    public required string Transactions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
