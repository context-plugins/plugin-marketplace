using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// DTO for Bill Line Item classifications.
/// </summary>
public record BillLineItemClassificationsDto
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
    /// BILL-generated ID of the employee. The value begins with <c>emp</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("employeeId")]
    public string? EmployeeId { get; init; }

    /// <summary>
    /// BILL-generated ID of the job. The value begins with <c>job</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobId")]
    public string? JobId { get; init; }

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

    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
