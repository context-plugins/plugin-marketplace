using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Wrapper object for creating support tickets via the external API.
/// </summary>
public record TicketCreateFormExtApi
{
    /// <summary>
    /// Payload to create a support ticket via API.
    /// </summary>
    [JsonPropertyName("ticket")]
    public required TicketExtApi Ticket { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
