using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Mobile-usability issue type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IssueType>))]
public sealed record IssueType : OpenStringEnum<IssueType>
{
    private IssueType(string value) : base(value)
    {
    }

    public static readonly IssueType MobileUsabilityIssueTypeUnspecified = new(
        "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED");

    public static readonly IssueType UsesIncompatiblePlugins = new("USES_INCOMPATIBLE_PLUGINS");

    public static readonly IssueType ConfigureViewport = new("CONFIGURE_VIEWPORT");

    public static readonly IssueType FixedWidthViewport = new("FIXED_WIDTH_VIEWPORT");

    public static readonly IssueType SizeContentToViewport = new("SIZE_CONTENT_TO_VIEWPORT");

    public static readonly IssueType UseLegibleFontSizes = new("USE_LEGIBLE_FONT_SIZES");

    public static readonly IssueType TapTargetsTooClose = new("TAP_TARGETS_TOO_CLOSE");

    public TResult Match<TResult>(Func<TResult> onMobileUsabilityIssueTypeUnspecified,
        Func<TResult> onUsesIncompatiblePlugins,
        Func<TResult> onConfigureViewport,
        Func<TResult> onFixedWidthViewport,
        Func<TResult> onSizeContentToViewport,
        Func<TResult> onUseLegibleFontSizes,
        Func<TResult> onTapTargetsTooClose,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MobileUsabilityIssueTypeUnspecified => onMobileUsabilityIssueTypeUnspecified(),
            _ when this == UsesIncompatiblePlugins => onUsesIncompatiblePlugins(),
            _ when this == ConfigureViewport => onConfigureViewport(),
            _ when this == FixedWidthViewport => onFixedWidthViewport(),
            _ when this == SizeContentToViewport => onSizeContentToViewport(),
            _ when this == UseLegibleFontSizes => onUseLegibleFontSizes(),
            _ when this == TapTargetsTooClose => onTapTargetsTooClose(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobileUsabilityIssueTypeUnspecified,
        Action onUsesIncompatiblePlugins,
        Action onConfigureViewport,
        Action onFixedWidthViewport,
        Action onSizeContentToViewport,
        Action onUseLegibleFontSizes,
        Action onTapTargetsTooClose,
        Action<string> otherwise)
    {
        if (this == MobileUsabilityIssueTypeUnspecified) onMobileUsabilityIssueTypeUnspecified();
        else if (this == UsesIncompatiblePlugins) onUsesIncompatiblePlugins();
        else if (this == ConfigureViewport) onConfigureViewport();
        else if (this == FixedWidthViewport) onFixedWidthViewport();
        else if (this == SizeContentToViewport) onSizeContentToViewport();
        else if (this == UseLegibleFontSizes) onUseLegibleFontSizes();
        else if (this == TapTargetsTooClose) onTapTargetsTooClose();
        else otherwise(Value);
    }
}
