using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record CaptureCardPresentAuthorization
{
    /// <summary>
    /// The amount of the  <c>Authorization</c>  you would like to capture in cents. Must be less than or equal to the <c>amount</c> of the <c>Authorization</c>.
    /// </summary>
    [JsonPropertyName("capture_amount")]
    public required long CaptureAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
