using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// The subClass attribute will only return values for payment transactions (i.e. will be empty for all others) plus [new] bank fee transactions for those relating to account conduct such as account overdrawn and direct debit dishonours.
/// </summary>
public record SubClassConnectTransactionsApi
{
    /// <summary>
    /// code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    /// <summary>
    /// SubClass title
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
