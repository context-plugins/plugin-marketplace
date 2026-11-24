using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Dimension>))]
public sealed record Dimension : OpenStringEnum<Dimension>
{
    private Dimension(string value) : base(value)
    {
    }

    public static readonly Dimension Query = new("QUERY");

    public static readonly Dimension Page = new("PAGE");

    public static readonly Dimension Country = new("COUNTRY");

    public static readonly Dimension Device = new("DEVICE");

    public static readonly Dimension SearchAppearance = new("SEARCH_APPEARANCE");

    public TResult Match<TResult>(Func<TResult> onQuery,
        Func<TResult> onPage,
        Func<TResult> onCountry,
        Func<TResult> onDevice,
        Func<TResult> onSearchAppearance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Query => onQuery(),
            _ when this == Page => onPage(),
            _ when this == Country => onCountry(),
            _ when this == Device => onDevice(),
            _ when this == SearchAppearance => onSearchAppearance(),
            _ => otherwise(Value)
        };

    public void Match(Action onQuery,
        Action onPage,
        Action onCountry,
        Action onDevice,
        Action onSearchAppearance,
        Action<string> otherwise)
    {
        if (this == Query) onQuery();
        else if (this == Page) onPage();
        else if (this == Country) onCountry();
        else if (this == Device) onDevice();
        else if (this == SearchAppearance) onSearchAppearance();
        else otherwise(Value);
    }
}
