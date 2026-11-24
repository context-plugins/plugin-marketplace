using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Secret provides a reference to entries in Secret Manager.
/// </summary>
public record GoogleCloudApihubV1Secret
{
    /// <summary>
    /// Required. The resource name of the secret version in the format, format as: <c>projects/*/secrets/*/versions/*</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretVersion")]
    public string? SecretVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
