using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record PulseCreate
{
    /// <summary>
    /// Up to 200 EINs to watch. Any format — normalized per EIN.
    /// </summary>
    [JsonPropertyName("eins")]
    public required IReadOnlyList<string> Eins { get; init; }

    /// <summary>
    /// A label for the digest header.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name1? Name { get; init; }

    /// <summary>
    /// hourly | daily | weekly (default) | monthly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frequency")]
    public Frequency1? Frequency { get; init; }

    /// <summary>
    /// Subset of: compliance, filings, grants, gov, people, web. Default all.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checks")]
    public Checks1? Checks { get; init; }

    /// <summary>
    /// Up to 5 addresses for digest delivery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_to")]
    public EmailTo1? EmailTo { get; init; }

    /// <summary>
    /// activity (default: email only when something changed) | always.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_mode")]
    public EmailMode1? EmailMode { get; init; }

    /// <summary>
    /// An https link the digest email carries for recipients to stop it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsubscribe_url")]
    public UnsubscribeUrl1? UnsubscribeUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
