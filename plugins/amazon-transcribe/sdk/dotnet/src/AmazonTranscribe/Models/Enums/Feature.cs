using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Indicates the type of analytics feature that was skipped during the analysis of a call analytics job.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Feature>))]
public sealed record Feature : OpenStringEnum<Feature>
{
    private Feature(string value) : base(value)
    {
    }

    public static readonly Feature GenerativeSummarization = new("GENERATIVE_SUMMARIZATION");

    public TResult Match<TResult>(Func<TResult> onGenerativeSummarization, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GenerativeSummarization => onGenerativeSummarization(),
            _ => otherwise(Value)
        };

    public void Match(Action onGenerativeSummarization, Action<string> otherwise)
    {
        if (this == GenerativeSummarization) onGenerativeSummarization();
        else otherwise(Value);
    }
}
