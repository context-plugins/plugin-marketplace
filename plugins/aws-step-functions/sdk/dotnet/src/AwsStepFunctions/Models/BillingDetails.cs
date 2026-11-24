using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record BillingDetails
{
    /// <summary>
    /// Billed memory consumption of your workflow, in MB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billedMemoryUsedInMB")]
    public int? BilledMemoryUsedInMb { get; init; }

    /// <summary>
    /// Billed duration of your workflow, in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billedDurationInMilliseconds")]
    public int? BilledDurationInMilliseconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
