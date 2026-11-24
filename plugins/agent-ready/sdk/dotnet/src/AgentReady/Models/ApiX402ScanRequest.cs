using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;

namespace AgentReady.Models;

/// <summary>
/// The website URL to scan.
/// </summary>
public record ApiX402ScanRequest
{
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
