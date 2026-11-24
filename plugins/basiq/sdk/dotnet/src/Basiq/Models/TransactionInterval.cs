using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record TransactionInterval
{
    /// <summary>
    /// Date of first transaction on this account
    /// </summary>
    [JsonPropertyName("from")]
    public required string From { get; init; }

    /// <summary>
    /// Date of last transaction on this account
    /// </summary>
    [JsonPropertyName("to")]
    public required string To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
