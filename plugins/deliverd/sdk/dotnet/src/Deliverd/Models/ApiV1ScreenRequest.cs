using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ScreenRequest
{
    /// <summary>
    /// The text about to be sent to a model. Screened in memory and never stored
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    [MaxLength(200000)]
    public string? Text { get; init; }

    /// <summary>
    /// What was found, by kind, when the text was screened where it is (the SDKs do this) and is not being sent
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("counts")]
    public IReadOnlyDictionary<string, int>? Counts { get; init; }

    /// <summary>
    /// With counts: the strictest classification among the terms found
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termClassification")]
    public TermClassification? TermClassification { get; init; }

    /// <summary>
    /// The AI register's record for the model it is going to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aiSystemId")]
    public Guid? AiSystemId { get; init; }

    /// <summary>
    /// What the text is for, for the person asked: 'Summarise a claim file'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purpose")]
    [MaxLength(500)]
    public string? Purpose { get; init; }

    /// <summary>
    /// Your own reference, kept on any approval this asks for
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [MaxLength(200)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// Microsoft Purview's answer on the text, from the SDKs' purviewCheck: the strictest restriction its DLP policies returned (block, warn, audit or none). The text itself went to Microsoft, never here
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purview")]
    public Purview? Purview { get; init; }

    /// <summary>
    /// Whether an <c>ask</c> verdict creates an approval for a person. Default true
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ask")]
    public bool? Ask { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
