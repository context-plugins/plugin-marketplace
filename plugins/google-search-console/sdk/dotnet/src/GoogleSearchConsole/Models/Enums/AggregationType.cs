using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. <b>Note:</b> If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AggregationType>))]
public sealed record AggregationType : OpenStringEnum<AggregationType>
{
    private AggregationType(string value) : base(value)
    {
    }

    public static readonly AggregationType Auto = new("AUTO");

    public static readonly AggregationType ByProperty = new("BY_PROPERTY");

    public static readonly AggregationType ByPage = new("BY_PAGE");

    public static readonly AggregationType ByNewsShowcasePanel = new("BY_NEWS_SHOWCASE_PANEL");

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
