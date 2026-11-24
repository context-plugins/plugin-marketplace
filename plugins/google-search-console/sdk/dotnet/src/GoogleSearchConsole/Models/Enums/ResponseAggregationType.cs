using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// How the results were aggregated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResponseAggregationType>))]
public sealed record ResponseAggregationType : OpenStringEnum<ResponseAggregationType>
{
    private ResponseAggregationType(string value) : base(value)
    {
    }

    public static readonly ResponseAggregationType Auto = new("AUTO");

    public static readonly ResponseAggregationType ByProperty = new("BY_PROPERTY");

    public static readonly ResponseAggregationType ByPage = new("BY_PAGE");

    public static readonly ResponseAggregationType ByNewsShowcasePanel = new("BY_NEWS_SHOWCASE_PANEL");

    public TResult Match<TResult>(Func<TResult> onAuto,
        Func<TResult> onByProperty,
        Func<TResult> onByPage,
        Func<TResult> onByNewsShowcasePanel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == ByProperty => onByProperty(),
            _ when this == ByPage => onByPage(),
            _ when this == ByNewsShowcasePanel => onByNewsShowcasePanel(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto,
        Action onByProperty,
        Action onByPage,
        Action onByNewsShowcasePanel,
        Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == ByProperty) onByProperty();
        else if (this == ByPage) onByPage();
        else if (this == ByNewsShowcasePanel) onByNewsShowcasePanel();
        else otherwise(Value);
    }
}
