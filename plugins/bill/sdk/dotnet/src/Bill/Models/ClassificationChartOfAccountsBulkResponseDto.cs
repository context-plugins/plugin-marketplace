using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Response Dto for bulk classification chart of accounts.
/// </summary>
public record ClassificationChartOfAccountsBulkResponseDto
{
    /// <summary>
    /// List of chart of accounts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chartOfAccounts")]
    public IReadOnlyList<ClassificationChartOfAccountsResponseDto>? ChartOfAccounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
