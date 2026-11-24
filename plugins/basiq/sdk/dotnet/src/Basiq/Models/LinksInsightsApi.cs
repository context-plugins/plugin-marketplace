using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

/// <summary>
/// For multi-user insights the self link uses the first userId from the users array.
/// </summary>
public record LinksInsightsApi
{
    /// <summary>
    /// Self link pointing to /users/{firstUserId}/insights/{insightId}
    /// </summary>
    [JsonPropertyName("self")]
    [Format(FormatKind.Uri)]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
