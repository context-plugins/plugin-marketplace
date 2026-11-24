using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1DeleteCustomReportResponse
{
    /// <summary>
    /// The response contains only a message field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
