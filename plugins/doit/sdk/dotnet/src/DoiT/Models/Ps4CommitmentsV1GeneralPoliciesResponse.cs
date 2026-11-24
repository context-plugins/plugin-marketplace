using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Ps4CommitmentsV1GeneralPoliciesResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<CommitmentPolicy> Items { get; init; }

    /// <summary>
    /// Opaque cursor for the next page. <c>null</c> when this is the last page.
    /// </summary>
    [JsonPropertyName("pageToken")]
    public required string? PageToken { get; init; }

    /// <summary>
    /// Total number of policies available to the tenant across all pages.
    /// </summary>
    [JsonPropertyName("rowCount")]
    public required long RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
