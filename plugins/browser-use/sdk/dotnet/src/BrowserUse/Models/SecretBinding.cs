using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Models.OneOf;

namespace BrowserUse.Models;

/// <summary>
/// One credential this run may have typed into a browser field.
/// <para>
/// The value never reaches the agent. It is encrypted at rest, kept out of the
/// worker payload, and typed straight into the focused field by the server when
/// the agent asks for the alias by name — and only while the page it is typing
/// into is on one of <c>allowedDomains</c>.
/// </para>
/// <para>
/// Run-scoped: bindings die with the run, so a follow-up run that needs the same
/// credential must send it again.
/// </para>
/// </summary>
public record SecretBinding
{
    /// <summary>
    /// Name the agent refers to this secret by, e.g. "github_password".
    /// </summary>
    [JsonPropertyName("alias")]
    public required string Alias { get; init; }

    [JsonPropertyName("source")]
    public required Source Source { get; init; }

    /// <summary>
    /// Hosts the secret may be typed into, e.g. ["github.com"]. A host covers its subdomains. Bare hostnames only — no scheme, port, path, or wildcard.
    /// </summary>
    [JsonPropertyName("allowedDomains")]
    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<string> AllowedDomains { get; init; }
}
