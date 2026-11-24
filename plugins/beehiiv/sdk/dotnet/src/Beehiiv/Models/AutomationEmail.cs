using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

/// <summary>
/// An email message within an automation.
/// </summary>
public record AutomationEmail
{
    /// <summary>
    /// The unique ID of the email message
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The unique ID of the automation step this email belongs to
    /// </summary>
    [JsonPropertyName("automation_step_id")]
    public required string AutomationStepId { get; init; }

    /// <summary>
    /// The email subject line
    /// </summary>
    [JsonPropertyName("subject_line")]
    public required string SubjectLine { get; init; }

    /// <summary>
    /// The email preview text
    /// </summary>
    [JsonPropertyName("preview_text")]
    public required string PreviewText { get; init; }

    /// <summary>
    /// The status of the email message. <c>active</c> - The email is active and will be sent. <c>inactive</c> - The email is inactive.
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    /// <summary>
    /// The time the email was first sent. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_sent_at")]
    public int? FirstSentAt { get; init; }

    /// <summary>
    /// The time the email was last sent. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_sent_at")]
    public int? LastSentAt { get; init; }

    /// <summary>
    /// The time the email was created. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonPropertyName("created_at")]
    public required int CreatedAt { get; init; }

    /// <summary>
    /// Statistics for an automation email message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public AutomationEmailStats? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
