using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation isn't disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HtmlSanitization>))]
public sealed record HtmlSanitization : OpenStringEnum<HtmlSanitization>
{
    private HtmlSanitization(string value) : base(value)
    {
    }

    public static readonly HtmlSanitization HtmlSanitizationUnspecified = new("HTML_SANITIZATION_UNSPECIFIED");

    public static readonly HtmlSanitization HtmlSanitizationDisabled = new("HTML_SANITIZATION_DISABLED");

    public static readonly HtmlSanitization SimpleFormattingOnly = new("SIMPLE_FORMATTING_ONLY");

    public TResult Match<TResult>(Func<TResult> onHtmlSanitizationUnspecified,
        Func<TResult> onHtmlSanitizationDisabled,
        Func<TResult> onSimpleFormattingOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HtmlSanitizationUnspecified => onHtmlSanitizationUnspecified(),
            _ when this == HtmlSanitizationDisabled => onHtmlSanitizationDisabled(),
            _ when this == SimpleFormattingOnly => onSimpleFormattingOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onHtmlSanitizationUnspecified,
        Action onHtmlSanitizationDisabled,
        Action onSimpleFormattingOnly,
        Action<string> otherwise)
    {
        if (this == HtmlSanitizationUnspecified) onHtmlSanitizationUnspecified();
        else if (this == HtmlSanitizationDisabled) onHtmlSanitizationDisabled();
        else if (this == SimpleFormattingOnly) onSimpleFormattingOnly();
        else otherwise(Value);
    }
}
