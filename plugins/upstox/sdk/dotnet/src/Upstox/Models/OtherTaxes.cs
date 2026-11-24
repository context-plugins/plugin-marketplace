using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record OtherTaxes
{
    /// <summary>
    /// Transaction charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transaction")]
    public double? Transaction { get; init; }

    /// <summary>
    /// Clearing charges
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
    /// SEBI turnover charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sebi_turnover")]
    public double? SebiTurnover { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
