using System.Text.Json.Serialization;
using Apibara.Core.Models;

namespace Apibara.Models;

public record ChangeCursorExpiredResponse
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "False";

    [JsonPropertyName("error")]
    public string Error { get; } = "cursor_expired";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("meta")]
    public required Meta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
