using System.Text.Json.Serialization;
using SalesforceServiceCloud.Models.Enums;

namespace SalesforceServiceCloud.Models;

public record NormalizedEntity
{
    /// <summary>
    /// Probability number that the AI assigns to this entity.
    /// </summary>
    [JsonPropertyName("confidenceScore")]
    public required double ConfidenceScore { get; init; }

    /// <summary>
    /// Value of the entity that the customer enters.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    /// <summary>
    /// System or custom entity Type (<see href="https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_an_entity.htm&amp;type=5">What’s an Entity?</see>).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// "Prediction system that detects the entity. The Bot API can call NLPs or it can figure out the entity by itself."
    /// <list type="bullet">
    ///   <item><description><c>BOT_SERVICE</c>—Bot detects entity without Natural Language Processing (NLP)</description></item>
    ///   <item><description><c>CORE_NLP</c>—Third-party NLP</description></item>
    ///   <item><description><c>EINSTEIN_NLP</c>—Einstein NLP</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entitySource")]
    public EntitySource? EntitySource { get; init; }
}
