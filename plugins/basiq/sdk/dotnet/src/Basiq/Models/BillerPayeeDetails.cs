using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Details specific to biller payees.
/// </summary>
public record BillerPayeeDetails
{
    /// <summary>
    /// The BPAY biller code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billerCode")]
    public string? BillerCode { get; init; }

    /// <summary>
    /// The Customer Reference Number for the biller.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crn")]
    public string? Crn { get; init; }

    /// <summary>
    /// The name of the biller.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billerName")]
    public string? BillerName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
