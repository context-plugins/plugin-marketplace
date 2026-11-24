using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of metric to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2DoiTReportsApi>))]
public sealed record Type2DoiTReportsApi : OpenStringEnum<Type2DoiTReportsApi>
{
    private Type2DoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly Type2DoiTReportsApi Basic = new("basic");

    public static readonly Type2DoiTReportsApi Custom = new("custom");

    public static readonly Type2DoiTReportsApi Extended = new("extended");

    public TResult Match<TResult>(Func<TResult> onBasic,
        Func<TResult> onCustom,
        Func<TResult> onExtended,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Basic => onBasic(),
            _ when this == Custom => onCustom(),
            _ when this == Extended => onExtended(),
            _ => otherwise(Value)
        };

    public void Match(Action onBasic, Action onCustom, Action onExtended, Action<string> otherwise)
    {
        if (this == Basic) onBasic();
        else if (this == Custom) onCustom();
        else if (this == Extended) onExtended();
        else otherwise(Value);
    }
}
