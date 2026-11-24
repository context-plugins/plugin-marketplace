using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record PrevalidationDetails
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DnsPrevalidation")]
    public DnsPrevalidationDetails? DnsPrevalidation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
