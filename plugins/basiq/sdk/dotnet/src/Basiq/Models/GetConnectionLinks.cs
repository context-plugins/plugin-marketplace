using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Object containing links to resources.
/// </summary>
public record GetConnectionLinks
{
    /// <summary>
    /// Accounts reference url.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accounts")]
    public string? Accounts { get; init; }

    /// <summary>
    /// Connection self reference url.
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    /// <summary>
    /// Transactions reference url.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactions")]
    public string? Transactions { get; init; }

    /// <summary>
    /// User reference url.
    /// </summary>
    [JsonPropertyName("user")]
    public required string User { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
