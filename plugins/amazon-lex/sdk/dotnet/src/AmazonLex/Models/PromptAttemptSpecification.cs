using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record PromptAttemptSpecification
{
    /// <summary>
    /// Indicates whether the user can interrupt a speech prompt attempt from the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowInterrupt")]
    public bool? AllowInterrupt { get; init; }

    [JsonPropertyName("allowedInputTypes")]
    public required AllowedInputTypes AllowedInputTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioAndDTMFInputSpecification")]
    public AudioAndDtmfInputSpecification? AudioAndDtmfInputSpecification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("textInputSpecification")]
    public TextInputSpecification? TextInputSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
