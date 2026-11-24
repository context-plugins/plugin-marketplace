using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record EmailValidationChallenge
{
    /// <summary>
    /// A list of email addresses that ACM uses to send domain validation emails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationEmails")]
    public IReadOnlyList<string>? ValidationEmails { get; init; }

    /// <summary>
    /// The domain name that ACM uses to send validation emails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValidationDomain")]
    public string? ValidationDomain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
