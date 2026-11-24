using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify if you want only a redacted transcript, or if you want a redacted and an unredacted transcript. When you choose redacted Amazon Transcribe creates only a redacted transcript. When you choose redacted_and_unredacted Amazon Transcribe creates a redacted and an unredacted transcript (as two separate files).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RedactionOutput>))]
public sealed record RedactionOutput : OpenStringEnum<RedactionOutput>
{
    private RedactionOutput(string value) : base(value)
    {
    }

    public static readonly RedactionOutput Redacted = new("redacted");

    public static readonly RedactionOutput RedactedAndUnredacted = new("redacted_and_unredacted");

    public TResult Match<TResult>(Func<TResult> onRedacted,
        Func<TResult> onRedactedAndUnredacted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Redacted => onRedacted(),
            _ when this == RedactedAndUnredacted => onRedactedAndUnredacted(),
            _ => otherwise(Value)
        };

    public void Match(Action onRedacted, Action onRedactedAndUnredacted, Action<string> otherwise)
    {
        if (this == Redacted) onRedacted();
        else if (this == RedactedAndUnredacted) onRedactedAndUnredacted();
        else otherwise(Value);
    }
}
