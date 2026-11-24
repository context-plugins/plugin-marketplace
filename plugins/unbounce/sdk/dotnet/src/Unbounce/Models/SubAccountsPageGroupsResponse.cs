using System.Collections.Generic;
using System.Text.Json.Serialization;
using Unbounce.Core.Models;

namespace Unbounce.Models;

public record SubAccountsPageGroupsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_groups")]
    public IReadOnlyList<PageGroup>? PageGroups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
