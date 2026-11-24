using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Rule violated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Rule>))]
public sealed record Rule : OpenStringEnum<Rule>
{
    private Rule(string value) : base(value)
    {
    }

    public static readonly Rule MobileFriendlyRuleUnspecified = new("MOBILE_FRIENDLY_RULE_UNSPECIFIED");

    public static readonly Rule UsesIncompatiblePlugins = new("USES_INCOMPATIBLE_PLUGINS");

    public static readonly Rule ConfigureViewport = new("CONFIGURE_VIEWPORT");

    public static readonly Rule FixedWidthViewport = new("FIXED_WIDTH_VIEWPORT");

    public static readonly Rule SizeContentToViewport = new("SIZE_CONTENT_TO_VIEWPORT");

    public static readonly Rule UseLegibleFontSizes = new("USE_LEGIBLE_FONT_SIZES");

    public static readonly Rule TapTargetsTooClose = new("TAP_TARGETS_TOO_CLOSE");

    public TResult Match<TResult>(Func<TResult> onMobileFriendlyRuleUnspecified,
        Func<TResult> onUsesIncompatiblePlugins,
        Func<TResult> onConfigureViewport,
        Func<TResult> onFixedWidthViewport,
        Func<TResult> onSizeContentToViewport,
        Func<TResult> onUseLegibleFontSizes,
        Func<TResult> onTapTargetsTooClose,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MobileFriendlyRuleUnspecified => onMobileFriendlyRuleUnspecified(),
            _ when this == UsesIncompatiblePlugins => onUsesIncompatiblePlugins(),
            _ when this == ConfigureViewport => onConfigureViewport(),
            _ when this == FixedWidthViewport => onFixedWidthViewport(),
            _ when this == SizeContentToViewport => onSizeContentToViewport(),
            _ when this == UseLegibleFontSizes => onUseLegibleFontSizes(),
            _ when this == TapTargetsTooClose => onTapTargetsTooClose(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobileFriendlyRuleUnspecified,
        Action onUsesIncompatiblePlugins,
        Action onConfigureViewport,
        Action onFixedWidthViewport,
        Action onSizeContentToViewport,
        Action onUseLegibleFontSizes,
        Action onTapTargetsTooClose,
        Action<string> otherwise)
    {
        if (this == MobileFriendlyRuleUnspecified) onMobileFriendlyRuleUnspecified();
        else if (this == UsesIncompatiblePlugins) onUsesIncompatiblePlugins();
        else if (this == ConfigureViewport) onConfigureViewport();
        else if (this == FixedWidthViewport) onFixedWidthViewport();
        else if (this == SizeContentToViewport) onSizeContentToViewport();
        else if (this == UseLegibleFontSizes) onUseLegibleFontSizes();
        else if (this == TapTargetsTooClose) onTapTargetsTooClose();
        else otherwise(Value);
    }
}
