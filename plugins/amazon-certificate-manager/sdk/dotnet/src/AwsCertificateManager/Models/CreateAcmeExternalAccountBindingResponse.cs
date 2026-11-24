using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record CreateAcmeExternalAccountBindingResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExternalAccountBinding")]
    public AcmeExternalAccountBinding? ExternalAccountBinding { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
