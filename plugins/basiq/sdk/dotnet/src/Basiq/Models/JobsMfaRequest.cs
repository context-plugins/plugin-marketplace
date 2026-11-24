using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record JobsMfaRequest
{
    /// <summary>
    /// One time password or answer to a security question/s e.g. ["1234"]
    /// </summary>
    [JsonPropertyName("mfa-response")]
    public required IReadOnlyList<string> MfaResponse { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
