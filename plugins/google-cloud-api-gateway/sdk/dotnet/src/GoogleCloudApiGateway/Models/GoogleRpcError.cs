using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// The error envelope every Google API returns.
/// </summary>
public record GoogleRpcError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
