using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record SubscriptionsResumeRequest
{
    /// <summary>
    /// When to resume. Currently only 'now' is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resume_at")]
    public ResumeAt? ResumeAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
