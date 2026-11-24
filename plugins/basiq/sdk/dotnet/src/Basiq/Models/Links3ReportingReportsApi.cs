using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Links3ReportingReportsApi
{
    /// <summary>
    /// Link to retrieve the account details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public string? Self { get; init; }

    /// <summary>
    /// Link to retrieve the transactions for the account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactions")]
    public string? Transactions { get; init; }

    /// <summary>
    /// Link to retrieve the institution details
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("institution")]
    public string? Institution { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
