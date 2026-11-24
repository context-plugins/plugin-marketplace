using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Bill User Approvals Response Dto.
/// </summary>
public record BillUserApprovalsResponseDto
{
    /// <summary>
    /// BILL-generated ID of the bill. The value begins with <c>00n</c>.
    /// </summary>
    [JsonPropertyName("billId")]
    public required string BillId { get; init; }

    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    public required string VendorId { get; init; }

    /// <summary>
    /// Bill amount. This value is in USD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// Bill due date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueDate")]
    public DateTimeOffset? DueDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
