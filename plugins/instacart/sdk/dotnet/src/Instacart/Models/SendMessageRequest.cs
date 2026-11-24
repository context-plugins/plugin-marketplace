using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record SendMessageRequest
{
    /// <summary>
    /// The text content of the message to send to the shopper.
    /// </summary>
    [JsonPropertyName("body")]
    [MaxLength(1000)]
    public required string Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
