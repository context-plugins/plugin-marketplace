using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The condition to apply. Valid values are EQUALS, NOT_EQUALS, LESS_THAN and GREATER_THAN.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConditionAmazonForecastServiceWhatIfForecastApi>))]
public sealed record ConditionAmazonForecastServiceWhatIfForecastApi : OpenStringEnum<ConditionAmazonForecastServiceWhatIfForecastApi>
{
    private ConditionAmazonForecastServiceWhatIfForecastApi(string value) : base(value)
    {
    }

    public static readonly ConditionAmazonForecastServiceWhatIfForecastApi EqualsMember = new("EQUALS");

    public static readonly ConditionAmazonForecastServiceWhatIfForecastApi NotEquals = new("NOT_EQUALS");

    public static readonly ConditionAmazonForecastServiceWhatIfForecastApi LessThan = new("LESS_THAN");

    public static readonly ConditionAmazonForecastServiceWhatIfForecastApi GreaterThan = new("GREATER_THAN");

    public TResult Match<TResult>(Func<TResult> onEqualsMember,
        Func<TResult> onNotEquals,
        Func<TResult> onLessThan,
        Func<TResult> onGreaterThan,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == NotEquals => onNotEquals(),
            _ when this == LessThan => onLessThan(),
            _ when this == GreaterThan => onGreaterThan(),
            _ => otherwise(Value)
        };

    public void Match(Action onEqualsMember,
        Action onNotEquals,
        Action onLessThan,
        Action onGreaterThan,
        Action<string> otherwise)
    {
        if (this == EqualsMember) onEqualsMember();
        else if (this == NotEquals) onNotEquals();
        else if (this == LessThan) onLessThan();
        else if (this == GreaterThan) onGreaterThan();
        else otherwise(Value);
    }
}
