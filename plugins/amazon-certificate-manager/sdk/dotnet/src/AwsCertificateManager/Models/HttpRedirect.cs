using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record HttpRedirect
{
    /// <summary>
    /// The URL including the domain to be validated. The certificate authority sends GET requests here during validation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RedirectFrom")]
    public string? RedirectFrom { get; init; }

    /// <summary>
    /// The URL hosting the validation token. RedirectFrom must return this content or redirect here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RedirectTo")]
    public string? RedirectTo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
