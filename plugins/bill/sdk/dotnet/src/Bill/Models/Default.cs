using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record Default
{
    /// <summary>
    /// Set as <c>true</c> if the bank account is set as default for Accounts Payable operations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payables")]
    public bool? Payables { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the bank account is set as default for Accounts Receivable operations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivables")]
    public bool? Receivables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
