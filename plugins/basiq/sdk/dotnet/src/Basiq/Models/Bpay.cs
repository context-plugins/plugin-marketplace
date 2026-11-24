using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Bpay
{
    /// <summary>
    /// BPAY Biller Code for the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billerCode")]
    public string? BillerCode { get; init; }

    /// <summary>
    /// Name of the BPAY biller for the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billerName")]
    public string? BillerName { get; init; }

    /// <summary>
    /// CRN for the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crn")]
    public string? Crn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
