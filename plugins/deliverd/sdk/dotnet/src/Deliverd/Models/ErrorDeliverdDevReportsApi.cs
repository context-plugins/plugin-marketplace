using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ErrorDeliverdDevReportsApi
{
    [JsonPropertyName("code")]
    public string Code { get; } = "version_conflict";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("details")]
    public required Details Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
