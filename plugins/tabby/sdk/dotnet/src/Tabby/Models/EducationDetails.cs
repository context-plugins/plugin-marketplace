using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

/// <summary>
/// Education-vertical risk signals for the current session.
/// </summary>
public record EducationDetails
{
    /// <summary>
    /// Duplicated from onboarding config for self-check.
    /// </summary>
    [JsonPropertyName("merchant_subtype")]
    public required MerchantSubtype MerchantSubtype { get; init; }

    /// <summary>
    /// Details of the education program being paid for.
    /// </summary>
    [JsonPropertyName("program")]
    public required Program Program { get; init; }

    /// <summary>
    /// Student's payment history with the merchant.
    /// </summary>
    [JsonPropertyName("student_history")]
    public required StudentHistory StudentHistory { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
