using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. The name of the SecretManager secret version resource storing the API key. Format: <c>projects/{project}/secrets/{secrete}/versions/{version}</c>. The <c>secretmanager.versions.access</c> permission should be granted to the service account accessing the secret.
/// </summary>
public record GoogleCloudApihubV1Secret2
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
