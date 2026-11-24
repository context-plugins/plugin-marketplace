using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Transformation to apply. Defaults to "paraphrase".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mapping>))]
public sealed record Mapping : OpenStringEnum<Mapping>
{
    private Mapping(string value) : base(value)
    {
    }

    public static readonly Mapping Paraphrase = new("paraphrase");

    public static readonly Mapping PassiveToActive = new("passive_to_active");

    public static readonly Mapping ActiveToPassive = new("active_to_passive");

    public static readonly Mapping InformalToFormal = new("informal_to_formal");

    public static readonly Mapping FormalToInformal = new("formal_to_informal");

    public static readonly Mapping SentenceSplit = new("sentence_split");

    public static readonly Mapping Reword = new("reword");

    public static readonly Mapping GenerateTitle = new("generate_title");

    public static readonly Mapping GenerateAcronym = new("generate_acronym");

    public static readonly Mapping GenerateMetaDescription = new("generate_meta_description");

    public static readonly Mapping Summarize = new("summarize");

    public static readonly Mapping Expand = new("expand");

    public static readonly Mapping Shorten = new("shorten");

    public static readonly Mapping SwitchTone = new("switch_tone");

    public static readonly Mapping SwitchTense = new("switch_tense");

    public TResult Match<TResult>(Func<TResult> onParaphrase,
        Func<TResult> onPassiveToActive,
        Func<TResult> onActiveToPassive,
        Func<TResult> onInformalToFormal,
        Func<TResult> onFormalToInformal,
        Func<TResult> onSentenceSplit,
        Func<TResult> onReword,
        Func<TResult> onGenerateTitle,
        Func<TResult> onGenerateAcronym,
        Func<TResult> onGenerateMetaDescription,
        Func<TResult> onSummarize,
        Func<TResult> onExpand,
        Func<TResult> onShorten,
        Func<TResult> onSwitchTone,
        Func<TResult> onSwitchTense,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Paraphrase => onParaphrase(),
            _ when this == PassiveToActive => onPassiveToActive(),
            _ when this == ActiveToPassive => onActiveToPassive(),
            _ when this == InformalToFormal => onInformalToFormal(),
            _ when this == FormalToInformal => onFormalToInformal(),
            _ when this == SentenceSplit => onSentenceSplit(),
            _ when this == Reword => onReword(),
            _ when this == GenerateTitle => onGenerateTitle(),
            _ when this == GenerateAcronym => onGenerateAcronym(),
            _ when this == GenerateMetaDescription => onGenerateMetaDescription(),
            _ when this == Summarize => onSummarize(),
            _ when this == Expand => onExpand(),
            _ when this == Shorten => onShorten(),
            _ when this == SwitchTone => onSwitchTone(),
            _ when this == SwitchTense => onSwitchTense(),
            _ => otherwise(Value)
        };

    public void Match(Action onParaphrase,
        Action onPassiveToActive,
        Action onActiveToPassive,
        Action onInformalToFormal,
        Action onFormalToInformal,
        Action onSentenceSplit,
        Action onReword,
        Action onGenerateTitle,
        Action onGenerateAcronym,
        Action onGenerateMetaDescription,
        Action onSummarize,
        Action onExpand,
        Action onShorten,
        Action onSwitchTone,
        Action onSwitchTense,
        Action<string> otherwise)
    {
        if (this == Paraphrase) onParaphrase();
        else if (this == PassiveToActive) onPassiveToActive();
        else if (this == ActiveToPassive) onActiveToPassive();
        else if (this == InformalToFormal) onInformalToFormal();
        else if (this == FormalToInformal) onFormalToInformal();
        else if (this == SentenceSplit) onSentenceSplit();
        else if (this == Reword) onReword();
        else if (this == GenerateTitle) onGenerateTitle();
        else if (this == GenerateAcronym) onGenerateAcronym();
        else if (this == GenerateMetaDescription) onGenerateMetaDescription();
        else if (this == Summarize) onSummarize();
        else if (this == Expand) onExpand();
        else if (this == Shorten) onShorten();
        else if (this == SwitchTone) onSwitchTone();
        else if (this == SwitchTense) onSwitchTense();
        else otherwise(Value);
    }
}
