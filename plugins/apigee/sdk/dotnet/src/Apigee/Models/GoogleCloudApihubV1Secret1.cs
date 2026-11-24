using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. Secret version reference containing the client secret. The <c>secretmanager.versions.access</c> permission should be granted to the service account accessing the secret.
/// </summary>
public record GoogleCloudApihubV1Secret1
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
