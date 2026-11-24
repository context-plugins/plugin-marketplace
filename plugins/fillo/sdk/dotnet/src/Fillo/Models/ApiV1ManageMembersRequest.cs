using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record ApiV1ManageMembersRequest
{
    [JsonPropertyName("role")]
    public required Role1 Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
