using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing EMV data.
/// </summary>
public record NetworkDetails1
{
    /// <summary>
    /// The EMV application label. Tag 50 from the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_label")]
    public string? ApplicationLabel { get; init; }

    /// <summary>
    /// The ID of the application used in the transaction. Tag 9F06 from the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application_identifier")]
    public string? ApplicationIdentifier { get; init; }

    /// <summary>
    /// The cryptogram returned by the card. Tag 9F26 of the EMVCo standard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cryptogram")]
    public string? Cryptogram { get; init; }

    /// <summary>
    /// The unique ID used to identify the approval of the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approval_code")]
    public string? ApprovalCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
