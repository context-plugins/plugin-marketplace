using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record InvalidPolicyRevisionIdException
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
