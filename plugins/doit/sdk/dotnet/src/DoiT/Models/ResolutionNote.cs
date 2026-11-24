using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Optional reason and comment captured on a resolve transition.
/// </summary>
public record ResolutionNote
{
    /// <summary>
    /// Feedback reason; must belong to the given <c>resolution</c>. <c>ANOMALY_CONFIRMED</c> accepts <c>SECURITY_BREACH</c>, <c>MISCONFIGURATION</c>, <c>UNINTENTIONAL_PROVISIONING</c>, <c>EXPECTED_COST_SPIKE</c>, <c>ANOMALOUS_OTHER</c>; <c>NOT_ANOMALY</c> accepts <c>FAULTY_ANOMALY_DETECTION_MODEL</c>, <c>INCORRECT_DATA</c>, <c>LOW_IMPACT</c>, <c>NON_ANOMALOUS_OTHER</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }

    /// <summary>
    /// Free-text resolution comment; stored as the tagged resolution comment on the anomaly feed. Length-capped like console comments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment")]
    public string? Comment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
