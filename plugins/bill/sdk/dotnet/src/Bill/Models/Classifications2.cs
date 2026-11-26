using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record Classifications2
{
    /// <summary>
    /// BILL-generated ID of the chart of accounts. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chartOfAccountId")]
    public string? ChartOfAccountId { get; init; }

    /// <summary>
    /// BILL-generated ID of the accounting class. The value begins with <c>cls</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountingClassId")]
    public string? AccountingClassId { get; init; }

    /// <summary>
    /// BILL-generated ID of the department. The value begins with <c>0de</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("departmentId")]
    public string? DepartmentId { get; init; }

    /// <summary>
    /// BILL-generated ID of the location. The value begins with <c>loc</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationId")]
    public string? LocationId { get; init; }

    /// <summary>
    /// BILL-generated ID of the item. The value begins with <c>0ii</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemId")]
    public string? ItemId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
