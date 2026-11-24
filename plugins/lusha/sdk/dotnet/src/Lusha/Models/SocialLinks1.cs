using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record SocialLinks1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedin")]
    public string? Linkedin { get; init; }

    /// <summary>
    /// Company Facebook page URL. Included automatically when available - no <c>reveal</c> entry needed. Omitted from the response when not available (never returned empty). Free field - no credits charged. Available on all plans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("facebook")]
    public string? Facebook { get; init; }

    /// <summary>
    /// Company X (formerly Twitter) profile URL. Included automatically when available - no <c>reveal</c> entry needed. Omitted from the response when not available (never returned empty). Free field - no credits charged. Available on all plans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x")]
    public string? X { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
