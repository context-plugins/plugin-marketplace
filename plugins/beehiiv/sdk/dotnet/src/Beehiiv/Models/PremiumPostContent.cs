using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// The requested premium post HTML. This HTML does not have paywalls enforced.
/// </summary>
public record PremiumPostContent
{
    /// <summary>
    /// The website HTML rendered to a free reader
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web")]
    public string? Web { get; init; }

    /// <summary>
    /// The email HTML rendered to a premium reader
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
