using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// The uniform <c>{error, source, detail}</c> envelope returned for every 4xx/5xx.
/// </summary>
public record ErrorResponseModel
{
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    /// <summary>
    /// Who is at fault for a failure.
    /// <para>
    /// ``user``: the customer's input, account, environment, or agent code.
    /// ``platform``: HUD infrastructure or a broken platform invariant.
    /// ``provider``: a third-party dependency (cloud runtime, upstream LLM API).
    /// </para>
    /// </summary>
    [JsonPropertyName("source")]
    public required ErrorSource Source { get; init; }

    [JsonPropertyName("detail")]
    public required string Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
