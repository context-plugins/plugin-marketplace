using System.Text.Json.Serialization;
using Celestia.Core.Models;

namespace Celestia.Models;

public record Success
{
    [JsonPropertyName("success")]
    public string SuccessValue { get; } = "True";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
