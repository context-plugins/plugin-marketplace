using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record ConnectLink
{
    /// <summary>
    /// The link to send to the account owner.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// The only platform the link connects, or <c>null</c> for any of the plan.
    /// </summary>
    [JsonPropertyName("platform")]
    public required PlatformId? Platform { get; init; }

    /// <summary>
    /// Mode of the connections it creates: that of the key.
    /// </summary>
    [JsonPropertyName("mode")]
    public required Mode Mode { get; init; }

    /// <summary>
    /// When the link stops working (7 days after creation).
    /// </summary>
    [JsonPropertyName("expires_at")]
    public required DateTimeOffset ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
