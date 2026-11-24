using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record InstanceIdDetail
{
    /// <summary>
    /// The ID of a corresponding EC2 instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
