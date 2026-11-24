using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The patient's preferred pronouns that the user wants to provide as a context for clinical note generation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Pronouns>))]
public sealed record Pronouns : OpenStringEnum<Pronouns>
{
    private Pronouns(string value) : base(value)
    {
    }

    public static readonly Pronouns HeHim = new("HE_HIM");

    public static readonly Pronouns SheHer = new("SHE_HER");

    public static readonly Pronouns TheyThem = new("THEY_THEM");

    public TResult Match<TResult>(Func<TResult> onHeHim,
        Func<TResult> onSheHer,
        Func<TResult> onTheyThem,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HeHim => onHeHim(),
            _ when this == SheHer => onSheHer(),
            _ when this == TheyThem => onTheyThem(),
            _ => otherwise(Value)
        };

    public void Match(Action onHeHim, Action onSheHer, Action onTheyThem, Action<string> otherwise)
    {
        if (this == HeHim) onHeHim();
        else if (this == SheHer) onSheHer();
        else if (this == TheyThem) onTheyThem();
        else otherwise(Value);
    }
}
