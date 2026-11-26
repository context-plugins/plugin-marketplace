using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record Classifications
{
    /// <summary>
    /// BILL-generated ID of the chart of accounts. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chartOfAccountId")]
    public string? ChartOfAccountId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
