using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record ClixExternalServiceSetProjectUserIdForDeviceBody
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_user_id")]
    public string? ProjectUserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
