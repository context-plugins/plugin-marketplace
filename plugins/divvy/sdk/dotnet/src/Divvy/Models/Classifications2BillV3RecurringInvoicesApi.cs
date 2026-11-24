using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record Classifications2BillV3RecurringInvoicesApi
{
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
