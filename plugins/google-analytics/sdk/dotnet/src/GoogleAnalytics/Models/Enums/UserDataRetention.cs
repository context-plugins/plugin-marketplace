using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Required. The length of time that user-level data is retained.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UserDataRetention>))]
public sealed record UserDataRetention : OpenStringEnum<UserDataRetention>
{
    private UserDataRetention(string value) : base(value)
    {
    }

    public static readonly UserDataRetention RetentionDurationUnspecified = new("RETENTION_DURATION_UNSPECIFIED");

    public static readonly UserDataRetention TwoMonths = new("TWO_MONTHS");

    public static readonly UserDataRetention FourteenMonths = new("FOURTEEN_MONTHS");

    public static readonly UserDataRetention TwentySixMonths = new("TWENTY_SIX_MONTHS");

    public static readonly UserDataRetention ThirtyEightMonths = new("THIRTY_EIGHT_MONTHS");

    public static readonly UserDataRetention FiftyMonths = new("FIFTY_MONTHS");

    public TResult Match<TResult>(Func<TResult> onRetentionDurationUnspecified,
        Func<TResult> onTwoMonths,
        Func<TResult> onFourteenMonths,
        Func<TResult> onTwentySixMonths,
        Func<TResult> onThirtyEightMonths,
        Func<TResult> onFiftyMonths,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RetentionDurationUnspecified => onRetentionDurationUnspecified(),
            _ when this == TwoMonths => onTwoMonths(),
            _ when this == FourteenMonths => onFourteenMonths(),
            _ when this == TwentySixMonths => onTwentySixMonths(),
            _ when this == ThirtyEightMonths => onThirtyEightMonths(),
            _ when this == FiftyMonths => onFiftyMonths(),
            _ => otherwise(Value)
        };

    public void Match(Action onRetentionDurationUnspecified,
        Action onTwoMonths,
        Action onFourteenMonths,
        Action onTwentySixMonths,
        Action onThirtyEightMonths,
        Action onFiftyMonths,
        Action<string> otherwise)
    {
        if (this == RetentionDurationUnspecified) onRetentionDurationUnspecified();
        else if (this == TwoMonths) onTwoMonths();
        else if (this == FourteenMonths) onFourteenMonths();
        else if (this == TwentySixMonths) onTwentySixMonths();
        else if (this == ThirtyEightMonths) onThirtyEightMonths();
        else if (this == FiftyMonths) onFiftyMonths();
        else otherwise(Value);
    }
}
