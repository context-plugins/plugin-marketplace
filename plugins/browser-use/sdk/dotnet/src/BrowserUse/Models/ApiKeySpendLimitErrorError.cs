using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// FastAPI wraps endpoint errors in a top-level ``detail`` field.
/// </summary>
public record ApiKeySpendLimitErrorError
{
    [JsonPropertyName("detail")]
    public required Detail Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
