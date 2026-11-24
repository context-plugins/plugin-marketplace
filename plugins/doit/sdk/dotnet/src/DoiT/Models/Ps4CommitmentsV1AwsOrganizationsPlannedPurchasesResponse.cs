using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<AwsPlannedPurchase> Items { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Number of items in <c>items</c> for this response.
    /// </summary>
    [JsonPropertyName("rowCount")]
    public required long RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
