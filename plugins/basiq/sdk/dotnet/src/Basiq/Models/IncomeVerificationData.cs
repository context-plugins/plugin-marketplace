using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Required when type is INCOME_VERIFICATION.
/// </summary>
public record IncomeVerificationData
{
    [JsonPropertyName("income")]
    public required Income1 Income { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
