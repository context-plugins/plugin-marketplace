using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Controls what keyword match options to use. If both keyword_match_mode and disable_keyword_match are set, keyword_match_mode will take precedence. Defaults to KeywordMatchMode.KEYWORD_MATCH_ALL if no value is specified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<KeywordMatchMode>))]
public sealed record KeywordMatchMode : OpenStringEnum<KeywordMatchMode>
{
    private KeywordMatchMode(string value) : base(value)
    {
    }

    public static readonly KeywordMatchMode KeywordMatchModeUnspecified = new("KEYWORD_MATCH_MODE_UNSPECIFIED");

    public static readonly KeywordMatchMode KeywordMatchDisabled = new("KEYWORD_MATCH_DISABLED");

    public static readonly KeywordMatchMode KeywordMatchAll = new("KEYWORD_MATCH_ALL");

    public static readonly KeywordMatchMode KeywordMatchTitleOnly = new("KEYWORD_MATCH_TITLE_ONLY");

    public TResult Match<TResult>(Func<TResult> onKeywordMatchModeUnspecified,
        Func<TResult> onKeywordMatchDisabled,
        Func<TResult> onKeywordMatchAll,
        Func<TResult> onKeywordMatchTitleOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == KeywordMatchModeUnspecified => onKeywordMatchModeUnspecified(),
            _ when this == KeywordMatchDisabled => onKeywordMatchDisabled(),
            _ when this == KeywordMatchAll => onKeywordMatchAll(),
            _ when this == KeywordMatchTitleOnly => onKeywordMatchTitleOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onKeywordMatchModeUnspecified,
        Action onKeywordMatchDisabled,
        Action onKeywordMatchAll,
        Action onKeywordMatchTitleOnly,
        Action<string> otherwise)
    {
        if (this == KeywordMatchModeUnspecified) onKeywordMatchModeUnspecified();
        else if (this == KeywordMatchDisabled) onKeywordMatchDisabled();
        else if (this == KeywordMatchAll) onKeywordMatchAll();
        else if (this == KeywordMatchTitleOnly) onKeywordMatchTitleOnly();
        else otherwise(Value);
    }
}
