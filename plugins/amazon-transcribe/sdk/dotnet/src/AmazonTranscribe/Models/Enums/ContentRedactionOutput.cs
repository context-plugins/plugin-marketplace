using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify whether you want only a redacted transcript or both a redacted and an unredacted transcript. If you choose redacted and unredacted, two JSON files are generated and stored in the Amazon S3 output location you specify. Note that to include ContentRedactionOutput in your request, you must enable content redaction (ContentRedactionType).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentRedactionOutput>))]
public sealed record ContentRedactionOutput : OpenStringEnum<ContentRedactionOutput>
{
    private ContentRedactionOutput(string value) : base(value)
    {
    }

    public static readonly ContentRedactionOutput Redacted = new("redacted");

    public static readonly ContentRedactionOutput RedactedAndUnredacted = new("redacted_and_unredacted");

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
