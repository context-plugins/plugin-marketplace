using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Security related configuration, including encryption, Kerberos, etc.
/// </summary>
public record SecurityConfig
{
    /// <summary>
    /// Optional. Identity related configuration, including service account based secure multi-tenancy user mappings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identityConfig")]
    public IdentityConfig2? IdentityConfig { get; init; }

    /// <summary>
    /// Optional. Kerberos related configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kerberosConfig")]
    public KerberosConfig3? KerberosConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
