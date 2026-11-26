using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Step-up response.
/// </summary>
public record MfaStepUpResponseDto
{
    /// <summary>
    /// This field is set as <c>true</c> if the current API session is MFA-trusted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trusted")]
    public bool? Trusted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
