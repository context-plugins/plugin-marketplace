using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Core.Validation;
using CodeQr.Core.Validation.Attributes;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record TrackLeadRequest
{
    /// <summary>
    /// The unique ID of the click that the lead conversion event is attributed to. You can read this value from <c>cq_id</c> cookie. If an empty string is provided, CodeQR will try to find an existing customer with the provided <c>customerExternalId</c> and use the <c>clickId</c> from the customer if found.
    /// </summary>
    [JsonPropertyName("clickId")]
    public required string ClickId { get; init; }

    /// <summary>
    /// The name of the lead event to track. Can also be used as a unique identifier to associate a given lead event for a customer for a subsequent sale event (via the <c>leadEventName</c> prop in <c>/track/sale</c>).
    /// </summary>
    [JsonPropertyName("eventName")]
    [StringLength(255, MinimumLength = 1)]
    public required string EventName { get; init; }

    /// <summary>
    /// The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer.
    /// </summary>
    [JsonPropertyName("customerExternalId")]
    [StringLength(100, MinimumLength = 1)]
    public required string CustomerExternalId { get; init; }

    /// <summary>
    /// The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerName")]
    [MaxLength(100)]
    public string? CustomerName { get; init; }

    /// <summary>
    /// The email address of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerEmail")]
    [MaxLength(100)]
    [Format(FormatKind.Email)]
    public string? CustomerEmail { get; init; }

    /// <summary>
    /// The avatar URL of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerAvatar")]
    public string? CustomerAvatar { get; init; }

    /// <summary>
    /// The mode to use for tracking the lead event. <c>async</c> will not block the request; <c>wait</c> will block the request until the lead event is fully recorded in CodeQR; <c>deferred</c> will defer the lead event creation to a subsequent request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; } = Mode.Async;

    /// <summary>
    /// The numerical value associated with this lead event (e.g., number of provisioned seats in a free trial). If defined as N, the lead event will be tracked N times.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventQuantity")]
    public double? EventQuantity { get; init; }

    /// <summary>
    /// Additional metadata to be stored with the lead event. Max 10,000 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// Deduplication key shared with your own browser pixel. When your site also fires a Meta or TikTok pixel for this conversion, pass the same event id here so the platform counts it once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventId")]
    [MaxLength(255)]
    public string? EventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
