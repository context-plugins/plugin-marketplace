using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide. If you do not specify a value, the default is standard.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Engine>))]
public sealed record Engine : OpenStringEnum<Engine>
{
    private Engine(string value) : base(value)
    {
    }

    public static readonly Engine Standard = new("standard");

    public static readonly Engine Neural = new("neural");

    public static readonly Engine LongForm = new("long-form");

    public static readonly Engine Generative = new("generative");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onNeural,
        Func<TResult> onLongForm,
        Func<TResult> onGenerative,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Neural => onNeural(),
            _ when this == LongForm => onLongForm(),
            _ when this == Generative => onGenerative(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onNeural,
        Action onLongForm,
        Action onGenerative,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Neural) onNeural();
        else if (this == LongForm) onLongForm();
        else if (this == Generative) onGenerative();
        else otherwise(Value);
    }
}
