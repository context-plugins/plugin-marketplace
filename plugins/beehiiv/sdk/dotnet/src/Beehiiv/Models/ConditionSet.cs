using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record ConditionSet
{
    /// <summary>
    /// The UUID of the condition set.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The display name of the condition set.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Whether the condition set is currently active or has been archived.
    /// </summary>
    [JsonPropertyName("status")]
    public required ConditionSetStatus1 Status { get; init; }

    /// <summary>
    /// The time the condition set was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    /// <summary>
    /// The time the condition set was last updated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("updated")]
    public required int Updated { get; init; }

    /// <summary>
    /// The purpose of the condition set, indicating its intended use.
    /// </summary>
    [JsonPropertyName("purpose")]
    public string Purpose { get; } = "dynamic_content";

    /// <summary>
    /// Subscriber count statistics for the condition set. Included when <c>expand[]=stats</c> is specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public ConditionSetStats2? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
