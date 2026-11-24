using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record ProfileEmailApi
{
    /// <summary>
    /// The email address.
    /// - Example: <c>info@rocketreach.co</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// SMTP validation result. Options are <c>valid</c>, <c>invalid</c>, <c>accept-all</c>, or <c>unknown</c>.
    /// - Example: <c>valid</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("smtp_valid")]
    public string? SmtpValid { get; init; }

    /// <summary>
    /// The type of email address. Options are <c>personal</c>, <c>professional</c>, <c>disposable</c>, or <c>role-based</c>.
    /// - Example: <c>professional</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Timestamp of the last validation check of the email address.
    /// - Example: <c>2026-01-01T12:00:00Z</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_validation_check")]
    public string? LastValidationCheck { get; init; }

    /// <summary>
    /// RocketReach internal grade for the email. See &lt;a href="https://knowledgebase.rocketreach.co/hc/en-us/articles/360047771994"&gt;Email Grades&lt;/a&gt; for details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grade")]
    public string? Grade { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
