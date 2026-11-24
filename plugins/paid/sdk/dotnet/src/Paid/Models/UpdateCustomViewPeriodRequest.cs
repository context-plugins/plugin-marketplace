using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record UpdateCustomViewPeriodRequest
{
    /// <summary>
    /// Default date range for the view's queries. Use <c>{period_start:DateTime}</c> / <c>{period_end:DateTime}</c> placeholders in your SQL to make the range adjustable. Either relative (unit+amount) or absolute (start+end).
    /// </summary>
    [JsonPropertyName("period")]
    public required UpdateCustomViewPeriodRequestPeriod Period { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
