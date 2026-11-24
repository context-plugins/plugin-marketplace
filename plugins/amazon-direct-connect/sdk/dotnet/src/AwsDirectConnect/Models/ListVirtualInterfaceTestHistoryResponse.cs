using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record ListVirtualInterfaceTestHistoryResponse
{
    /// <summary>
    /// The ID of the tested virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceTestHistory")]
    public IReadOnlyList<VirtualInterfaceTestHistory>? VirtualInterfaceTestHistory { get; init; }

    /// <summary>
    /// The token to use to retrieve the next page of results. This value is null when there are no more results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
