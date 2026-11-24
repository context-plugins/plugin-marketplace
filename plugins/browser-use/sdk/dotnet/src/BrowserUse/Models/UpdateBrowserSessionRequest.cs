using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Request model for updating browser session state.
/// </summary>
public record UpdateBrowserSessionRequest
{
    /// <summary>
    /// The action to perform on the session
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "stop";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
