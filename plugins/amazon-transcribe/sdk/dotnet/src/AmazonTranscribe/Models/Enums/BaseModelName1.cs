using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The Amazon Transcribe standard language model, or base model, you specified when creating your custom language model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BaseModelName1>))]
public sealed record BaseModelName1 : OpenStringEnum<BaseModelName1>
{
    private BaseModelName1(string value) : base(value)
    {
    }

    public static readonly BaseModelName1 NarrowBand = new("NarrowBand");

    public static readonly BaseModelName1 WideBand = new("WideBand");

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
