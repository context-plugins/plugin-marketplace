using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Validation;
using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record V1ConnectLinksRequest
{
    /// <summary>
    /// Only this platform. Without it, the owner chooses among the platforms of your plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public PlatformId2? Platform { get; init; }

    /// <summary>
    /// Where to send the owner when they are done, with <c>connection_id</c> and <c>status</c> added to the query string. Must start with <c>https://</c> (or <c>http://localhost</c> for development).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_url")]
    [Format(FormatKind.Uri)]
    public string? RedirectUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
