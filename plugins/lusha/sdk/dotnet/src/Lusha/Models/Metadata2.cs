using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

/// <summary>
/// Metadata for the search to filter the results
/// </summary>
public record Metadata2
{
    /// <summary>
    /// Set this to true to refresh job information for the contact. This replaces any outdated job details with the most current information. By default, Lusha returns results for records that have at least one of the specified contact details (e.g., phone number or email address).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refreshJobInfo")]
    public bool? RefreshJobInfo { get; init; }

    /// <summary>
    /// Filters the results based on specific contact details. Use the following options: emailAddresses, phoneNumbers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterBy")]
    public string? FilterBy { get; init; }

    /// <summary>
    /// Set <c>revealEmails=true</c> to retrieve only the email address of the contact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revealEmails")]
    public bool? RevealEmails { get; init; }

    /// <summary>
    /// Set <c>revealPhones=true</c> to retrieve only the phone number of the contact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revealPhones")]
    public bool? RevealPhones { get; init; }

    /// <summary>
    /// Array of signal types to retrieve for the contact.
    /// - <c>allSignals</c>: All available signal types
    /// - <c>promotion</c>: Promotion signals
    /// - <c>companyChange</c>: Company change signals
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signals")]
    public IReadOnlyList<Signal>? Signals { get; init; }

    /// <summary>
    /// Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalsStartDate")]
    public DateTimeOffset? SignalsStartDate { get; init; }

    /// <summary>
    /// When set to true, returns a simplified contact profile with basic information only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partialProfile")]
    public bool? PartialProfile { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
