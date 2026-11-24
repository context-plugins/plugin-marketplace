using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// A phrases containing words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See <see href="https://cloud.google.com/speech-to-text/quotas#content">usage limits</see>. List items can also include pre-built or custom classes containing groups of words that represent common concepts that occur in natural language. For example, rather than providing a phrase hint for every month of the year (e.g. "i was born in january", "i was born in febuary", ...), use the pre-built <c>$MONTH</c> class improves the likelihood of correctly transcribing audio that includes months (e.g. "i was born in $month"). To refer to pre-built classes, use the class' symbol prepended with <c>$</c> e.g. <c>$MONTH</c>. To refer to custom classes that were defined inline in the request, set the class's <c>custom_class_id</c> to a string unique to all class resources and inline classes. Then use the class' id wrapped in $<c>{...}</c> e.g. "${my-months}". To refer to custom classes resources, use the class' id wrapped in <c>${}</c> (e.g. <c>${my-months}</c>). Speech-to-Text supports three locations: <c>global</c>, <c>us</c> (US North America), and <c>eu</c> (Europe). If you are calling the <c>speech.googleapis.com</c> endpoint, use the <c>global</c> location. To specify a region, use a <see href="https://cloud.google.com/speech-to-text/docs/endpoints">regional endpoint</see> with matching <c>us</c> or <c>eu</c> location value.
/// </summary>
public record Phrase
{
    /// <summary>
    /// Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though <c>boost</c> can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("boost")]
    public double? Boost { get; init; }

    /// <summary>
    /// The phrase itself.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
