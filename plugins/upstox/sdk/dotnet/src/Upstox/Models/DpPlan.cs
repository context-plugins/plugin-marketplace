using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record DpPlan
{
    /// <summary>
    /// Name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Minimum expense charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min_expense")]
    public double? MinExpense { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
