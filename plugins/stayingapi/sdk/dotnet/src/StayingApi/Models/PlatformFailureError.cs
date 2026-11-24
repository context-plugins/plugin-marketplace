using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record PlatformFailureError
{
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("code")]
    public required CodeStayingDataApi Code { get; init; }

    [JsonPropertyName("message")]
    [MinLength(1)]
    public required string Message { get; init; }

    [JsonPropertyName("retryable")]
    public required bool Retryable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
