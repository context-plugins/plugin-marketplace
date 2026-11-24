using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Engagement-count subtotal for a single bitlink or decoupled QR code. The <c>id</c> references either a bitlink (<c>&lt;domain&gt;/&lt;hash&gt;</c>) or a QR code guid, and <c>engagements</c> is the combined count of bitlink clicks or QR code scans for that entity.
/// </summary>
public record EngagementSubtotal
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("engagements")]
    public int? Engagements { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
