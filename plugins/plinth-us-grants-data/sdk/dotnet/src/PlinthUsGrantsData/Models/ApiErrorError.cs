using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Every failure answers with this envelope; <c>message</c> is safe to show a user.
/// </summary>
public record ApiErrorError
{
    [JsonPropertyName("code")]
    public required int Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
