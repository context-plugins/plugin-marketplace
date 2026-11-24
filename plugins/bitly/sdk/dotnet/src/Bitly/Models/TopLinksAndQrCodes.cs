using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Response shape for top bitlinks and decoupled QR codes in a group, ranked together by engagement count. <c>links</c> and <c>qr_codes</c> are independent lists (a link and a decoupled QR code are never the same entity); <c>sorted_engagements</c> is the unified descending-by-engagement ordering across both, with each entry's id referencing either a bitlink or a QR code guid. Coupled QRCs are listed by their bitlink ID.
/// </summary>
public record TopLinksAndQrCodes
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public IReadOnlyList<BitlinkBody>? Links { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qr_codes")]
    public IReadOnlyList<QrCodeMinimal>? QrCodes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sorted_engagements")]
    public IReadOnlyList<EngagementSubtotal>? SortedEngagements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
