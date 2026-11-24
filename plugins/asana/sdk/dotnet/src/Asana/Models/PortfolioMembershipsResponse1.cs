using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record PortfolioMembershipsResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public PortfolioMembershipResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
