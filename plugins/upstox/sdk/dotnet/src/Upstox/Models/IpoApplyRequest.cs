using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record IpoApplyRequest
{
    /// <summary>
    /// IPO id (slug) to apply for, as returned in <c>id</c> by the IPO listing and details APIs
    /// </summary>
    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

    /// <summary>
    /// UPI id used to block the application amount
    /// </summary>
    [JsonPropertyName("upi")]
    [MinLength(1)]
    public required string Upi { get; init; }

    /// <summary>
    /// Investor category to apply under. Must be one the issue accepts — see <c>investors[].category</c> in the IPO details API
    /// </summary>
    [JsonPropertyName("category")]
    public required Category Category { get; init; }

    /// <summary>
    /// List of bids for the application (1 to 3 bids)
    /// </summary>
    [JsonPropertyName("bids")]
    [MinLength(0)]
    [MaxLength(3)]
    public required IReadOnlyList<IpoBidRequest> Bids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
