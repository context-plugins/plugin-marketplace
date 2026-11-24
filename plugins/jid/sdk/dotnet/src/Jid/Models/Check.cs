using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Models.Enums;

namespace Jid.Models;

/// <summary>
/// One check from the registry. New checks add rows, never fields.
/// </summary>
public record Check
{
    /// <summary>
    /// Stable id: registered, sanctions, threat_feeds, email_address, mail_domain, domain_age, website, affiliation, adverse_records, licence, phone, location, enquiry, funding, complaints, lookalike_domain, email_auth, history
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group")]
    public Group? Group { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// What a fail means: block = do not engage, warn = verify first, info = never changes the recommendation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public Severity? Severity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("evidence")]
    public string? Evidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lookup")]
    public Lookup? Lookup { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phrase")]
    public string? Phrase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
