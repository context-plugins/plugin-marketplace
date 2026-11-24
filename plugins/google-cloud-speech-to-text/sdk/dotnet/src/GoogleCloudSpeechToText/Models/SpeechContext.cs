using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
/// </summary>
public record SpeechContext
{
    /// <summary>
    /// A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See <see href="https://cloud.google.com/speech-to-text/quotas#content">usage limits</see>. List items can also be set to classes for groups of words that represent common concepts that occur in natural language. For example, rather than providing phrase hints for every month of the year, using the $MONTH class improves the likelihood of correctly transcribing audio that includes months.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phrases")]
    public IReadOnlyList<string>? Phrases { get; init; }

    /// <summary>
    /// Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though <c>boost</c> can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("boost")]
    public double? Boost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
