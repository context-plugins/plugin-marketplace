using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record ApiV1StatutesSectionsResponse
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    [JsonPropertyName("data")]
    public required DataCommonelementsComStatutesApi Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
