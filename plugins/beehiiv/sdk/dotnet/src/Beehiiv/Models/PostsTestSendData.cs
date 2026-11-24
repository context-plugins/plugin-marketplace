using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PostsTestSendData
{
    /// <summary>
    /// Number of test sends remaining for the publication today.
    /// </summary>
    [JsonPropertyName("remaining_test_sends")]
    public required int RemainingTestSends { get; init; }

    /// <summary>
    /// Unix timestamp when the daily test send limit resets. Null if no test sends have been sent today.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reset_at")]
    public int? ResetAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
