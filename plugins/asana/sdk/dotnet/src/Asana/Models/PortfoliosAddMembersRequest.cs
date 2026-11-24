using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record PortfoliosAddMembersRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public AddMembersRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
