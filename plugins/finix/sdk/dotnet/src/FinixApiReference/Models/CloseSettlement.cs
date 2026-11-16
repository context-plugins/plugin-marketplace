using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record CloseSettlement
{
    /// <summary>
    /// The action you want to perform on the <c>Settlement</c>. Use <c>STOP_ACCRUAL</c> to close the specified <c>Settlement</c>.
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "STOP_ACCRUAL";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
