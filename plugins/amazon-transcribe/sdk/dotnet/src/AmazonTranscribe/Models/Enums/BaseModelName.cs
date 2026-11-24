using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The Amazon Transcribe standard language model, or base model, used to create your custom language model. Amazon Transcribe offers two options for base models: Wideband and Narrowband. If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose WideBand. To transcribe audio with a sample rate less than 16,000 Hz, choose NarrowBand.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BaseModelName>))]
public sealed record BaseModelName : OpenStringEnum<BaseModelName>
{
    private BaseModelName(string value) : base(value)
    {
    }

    public static readonly BaseModelName NarrowBand = new("NarrowBand");

    public static readonly BaseModelName WideBand = new("WideBand");

    public TResult Match<TResult>(Func<TResult> onNarrowBand,
        Func<TResult> onWideBand,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NarrowBand => onNarrowBand(),
            _ when this == WideBand => onWideBand(),
            _ => otherwise(Value)
        };

    public void Match(Action onNarrowBand, Action onWideBand, Action<string> otherwise)
    {
        if (this == NarrowBand) onNarrowBand();
        else if (this == WideBand) onWideBand();
        else otherwise(Value);
    }
}
