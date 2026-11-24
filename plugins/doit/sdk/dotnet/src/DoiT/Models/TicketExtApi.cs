using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Payload to create a support ticket via API.
/// </summary>
public record TicketExtApi
{
    /// <summary>
    /// The body of the ticket (can include html formatting).
    /// </summary>
    [JsonPropertyName("body")]
    public required string Body { get; init; }

    /// <summary>
    /// Ticket creation time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public string? Created { get; init; }

    /// <summary>
    /// Platform of the ticket.
    /// </summary>
    [JsonPropertyName("platform")]
    public required PlatformDoiTSupportRequestsApi Platform { get; init; }

    /// <summary>
    /// Ticket product details.
    /// </summary>
    [JsonPropertyName("product")]
    public required string Product { get; init; }

    /// <summary>
    /// Human contact email used as the Zendesk ticket requester. Required
    /// when the caller is a service account. User callers must omit this
    /// field; their verified email remains the requester.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requester")]
    [Format(FormatKind.Email)]
    public string? Requester { get; init; }

    /// <summary>
    /// Ticket severity.
    /// </summary>
    [JsonPropertyName("severity")]
    public required SeverityDoiTSupportRequestsApi Severity { get; init; }

    /// <summary>
    /// The subject of the ticket.
    /// </summary>
    [JsonPropertyName("subject")]
    public required string Subject { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
