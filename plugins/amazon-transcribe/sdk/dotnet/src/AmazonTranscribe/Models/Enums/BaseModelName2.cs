using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The Amazon Transcribe standard language model, or base model, used to create your custom language model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BaseModelName2>))]
public sealed record BaseModelName2 : OpenStringEnum<BaseModelName2>
{
    private BaseModelName2(string value) : base(value)
    {
    }

    public static readonly BaseModelName2 NarrowBand = new("NarrowBand");

    public static readonly BaseModelName2 WideBand = new("WideBand");

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
