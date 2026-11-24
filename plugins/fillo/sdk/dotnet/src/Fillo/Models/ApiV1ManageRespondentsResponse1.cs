using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageRespondentsResponse1
{
    [JsonPropertyName("externalId")]
    public required string ExternalId { get; init; }

    [JsonPropertyName("forgotten")]
    public string Forgotten { get; } = "True";

    [JsonPropertyName("responsesDeleted")]
    public required int ResponsesDeleted { get; init; }

    [JsonPropertyName("profileDeleted")]
    public required bool ProfileDeleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
