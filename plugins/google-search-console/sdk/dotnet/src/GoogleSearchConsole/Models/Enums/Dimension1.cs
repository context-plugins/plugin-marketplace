using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Dimension1>))]
public sealed record Dimension1 : OpenStringEnum<Dimension1>
{
    private Dimension1(string value) : base(value)
    {
    }

    public static readonly Dimension1 Date = new("DATE");

    public static readonly Dimension1 Query = new("QUERY");

    public static readonly Dimension1 Page = new("PAGE");

    public static readonly Dimension1 Country = new("COUNTRY");

    public static readonly Dimension1 Device = new("DEVICE");

    public static readonly Dimension1 SearchAppearance = new("SEARCH_APPEARANCE");

    public static readonly Dimension1 Hour = new("HOUR");

    public TResult Match<TResult>(Func<TResult> onDate,
        Func<TResult> onQuery,
        Func<TResult> onPage,
        Func<TResult> onCountry,
        Func<TResult> onDevice,
        Func<TResult> onSearchAppearance,
        Func<TResult> onHour,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Date => onDate(),
            _ when this == Query => onQuery(),
            _ when this == Page => onPage(),
            _ when this == Country => onCountry(),
            _ when this == Device => onDevice(),
            _ when this == SearchAppearance => onSearchAppearance(),
            _ when this == Hour => onHour(),
            _ => otherwise(Value)
        };

    public void Match(Action onDate,
        Action onQuery,
        Action onPage,
        Action onCountry,
        Action onDevice,
        Action onSearchAppearance,
        Action onHour,
        Action<string> otherwise)
    {
        if (this == Date) onDate();
        else if (this == Query) onQuery();
        else if (this == Page) onPage();
        else if (this == Country) onCountry();
        else if (this == Device) onDevice();
        else if (this == SearchAppearance) onSearchAppearance();
        else if (this == Hour) onHour();
        else otherwise(Value);
    }
}
