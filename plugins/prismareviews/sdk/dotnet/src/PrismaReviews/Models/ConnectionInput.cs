using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record ConnectionInput
{
    /// <summary>
    /// Platform to connect. An unknown value returns <c>422 invalid_request</c>.
    /// </summary>
    [JsonPropertyName("platform")]
    public required PlatformId1 Platform { get; init; }

    /// <summary>
    /// Required for <c>oauth</c> platforms (live keys): where the owner lands after approving, with <c>connection_id</c> and <c>status</c> in the query string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_url")]
    [Format(FormatKind.Uri)]
    public string? RedirectUrl { get; init; }

    /// <summary>
    /// Required for <c>credentials</c> platforms, and for Trustpilot (<c>domain</c>). Fields per platform in <c>GET /v1/platforms</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentials")]
    public object? Credentials { get; init; }

    /// <summary>
    /// Required for <c>listing_url</c> platforms: the public page of the listing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listing_url")]
    [Format(FormatKind.Uri)]
    public string? ListingUrl { get; init; }

    /// <summary>
    /// Your own key-value pairs, for example your client ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
