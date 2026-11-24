using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Test verdict, whether the page is mobile friendly or not.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MobileFriendliness>))]
public sealed record MobileFriendliness : OpenStringEnum<MobileFriendliness>
{
    private MobileFriendliness(string value) : base(value)
    {
    }

    public static readonly MobileFriendliness MobileFriendlyTestResultUnspecified = new(
        "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED");

    public static readonly MobileFriendliness MobileFriendly = new("MOBILE_FRIENDLY");

    public static readonly MobileFriendliness NotMobileFriendly = new("NOT_MOBILE_FRIENDLY");

    public TResult Match<TResult>(Func<TResult> onMobileFriendlyTestResultUnspecified,
        Func<TResult> onMobileFriendly,
        Func<TResult> onNotMobileFriendly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MobileFriendlyTestResultUnspecified => onMobileFriendlyTestResultUnspecified(),
            _ when this == MobileFriendly => onMobileFriendly(),
            _ when this == NotMobileFriendly => onNotMobileFriendly(),
            _ => otherwise(Value)
        };

    public void Match(Action onMobileFriendlyTestResultUnspecified,
        Action onMobileFriendly,
        Action onNotMobileFriendly,
        Action<string> otherwise)
    {
        if (this == MobileFriendlyTestResultUnspecified) onMobileFriendlyTestResultUnspecified();
        else if (this == MobileFriendly) onMobileFriendly();
        else if (this == NotMobileFriendly) onNotMobileFriendly();
        else otherwise(Value);
    }
}
