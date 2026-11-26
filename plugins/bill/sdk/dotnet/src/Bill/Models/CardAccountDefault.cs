using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Card Account Response Default.
/// </summary>
public record CardAccountDefault
{
    /// <summary>
    /// Set as <c>true</c> if the card account is set as default for Accounts Payable operations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payables")]
    public bool? Payables { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the card account is set as default for Accounts Receivable operations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivables")]
    public bool? Receivables { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the card account is set as default for funding
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding")]
    public bool? Funding { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the card account is set as default for disbursement
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disbursement")]
    public bool? Disbursement { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
