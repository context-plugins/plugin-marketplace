using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Identity related configuration, including service account based secure multi-tenancy user mappings.
/// </summary>
public record IdentityConfig
{
    /// <summary>
    /// Required. Map of user to service account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userServiceAccountMapping")]
    public IReadOnlyDictionary<string, string>? UserServiceAccountMapping { get; init; }

    /// <summary>
    /// Optional. Whether to enable SSH access for the cluster. The default is true for image versions prior to 3.1 and false for image versions 3.1 and later. The default behavior can be changed when creating clusters using image versions 2.3.30 and later.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableSsh")]
    public bool? EnableSsh { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
