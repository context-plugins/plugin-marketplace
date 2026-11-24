using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Other charges levied
/// </summary>
public record ProfitAndLossOtherChargesTaxes2
{
    /// <summary>
    /// transaction charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction")]
    public double? Transaction { get; init; }

    /// <summary>
    /// clearing charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clearing")]
    public double? Clearing { get; init; }

    /// <summary>
    /// IPF charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipft")]
    public double? Ipft { get; init; }

    /// <summary>
    /// others charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("others")]
    public double? Others { get; init; }

    /// <summary>
    /// SEBI turnover
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sebi_turnover")]
    public double? SebiTurnover { get; init; }

    /// <summary>
    /// demat transaction charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("demat_transaction")]
    public double? DematTransaction { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
