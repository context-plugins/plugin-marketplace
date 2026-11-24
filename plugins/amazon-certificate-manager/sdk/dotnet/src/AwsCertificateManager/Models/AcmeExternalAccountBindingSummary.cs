using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record AcmeExternalAccountBindingSummary
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME external account binding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeExternalAccountBindingArn")]
    public string? AcmeExternalAccountBindingArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the ACME endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeEndpointArn")]
    public string? AcmeEndpointArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role associated with the external account binding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RoleArn")]
    public string? RoleArn { get; init; }

    /// <summary>
    /// The time at which the external account binding expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExpiresAt")]
    public string? ExpiresAt { get; init; }

    /// <summary>
    /// The time at which the external account binding was revoked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RevokedAt")]
    public string? RevokedAt { get; init; }

    /// <summary>
    /// The time at which the external account binding was last used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUsedAt")]
    public string? LastUsedAt { get; init; }

    /// <summary>
    /// The time at which the external account binding was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// The time at which the external account binding was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UpdatedAt")]
    public string? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
