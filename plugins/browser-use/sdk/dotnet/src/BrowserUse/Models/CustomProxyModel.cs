using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Core.Validation.Attributes;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Request model for creating a custom proxy.
/// </summary>
public record CustomProxyModel
{
    /// <summary>
    /// Host of the proxy.
    /// </summary>
    [JsonPropertyName("host")]
    [StringLength(255, MinimumLength = 1)]
    public required string Host { get; init; }

    /// <summary>
    /// Port of the proxy.
    /// </summary>
    [JsonPropertyName("port")]
    [Minimum(1)]
    [Maximum(65535)]
    public required int Port { get; init; }

    /// <summary>
    /// Username for proxy authentication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public Username? Username { get; init; }

    /// <summary>
    /// Password for proxy authentication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public PasswordModel? Password { get; init; }

    /// <summary>
    /// Ignore TLS certificate errors. Enable this if your proxy uses a self-signed or untrusted certificate (e.g. Burp Suite, corporate proxies).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreCertErrors")]
    public bool? IgnoreCertErrors { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
