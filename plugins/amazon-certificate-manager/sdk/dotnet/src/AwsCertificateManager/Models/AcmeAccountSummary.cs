using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;
using AwsCertificateManager.Models.Enums;

namespace AwsCertificateManager.Models;

public record AcmeAccountSummary
{
    /// <summary>
    /// The URL of the ACME account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AccountUrl")]
    public string? AccountUrl { get; init; }

    /// <summary>
    /// The thumbprint of the public key associated with the ACME account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PublicKeyThumbprint")]
    public string? PublicKeyThumbprint { get; init; }

    /// <summary>
    /// The status of the ACME account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status? Status { get; init; }

    /// <summary>
    /// The time at which the ACME account was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreatedAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the external account binding associated with this ACME account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AcmeExternalAccountBindingArn")]
    public string? AcmeExternalAccountBindingArn { get; init; }

    /// <summary>
    /// The contact information for the ACME account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Contacts")]
    public IReadOnlyList<string>? Contacts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
