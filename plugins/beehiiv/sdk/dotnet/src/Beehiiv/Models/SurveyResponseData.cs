using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SurveyResponseData
{
    /// <summary>
    /// An array of answers from the survey response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answers")]
    public IReadOnlyList<SurveyResponseAnswer>? Answers { get; init; }

    /// <summary>
    /// The time the survey response was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public int? Created { get; init; }

    /// <summary>
    /// The response ID. This is unique to the individual submission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The ID of the survey that the response was submitted to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("survey_id")]
    public string? SurveyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription")]
    public SubscriptionData? Subscription { get; init; }

    /// <summary>
    /// The date the survey response was updated. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public int? Updated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
