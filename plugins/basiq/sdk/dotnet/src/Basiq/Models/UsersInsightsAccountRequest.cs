using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record UsersInsightsAccountRequest
{
    /// <summary>
    /// The account number to search for insights
    /// </summary>
    [JsonPropertyName("accountNumber")]
    public required string AccountNumber { get; init; }

    /// <summary>
    /// The type of account to search for insights
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountType")]
    public string? AccountType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
