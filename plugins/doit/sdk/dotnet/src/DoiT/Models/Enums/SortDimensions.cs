using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Orders the columns produced by <c>dimensions</c>, both in the console and in a rendered
/// <c>fileOutput</c> export. It does not reorder the <c>rows</c> of a JSON result.
/// <c>a_to_z</c> orders the columns by the dimension value, which for the <c>year</c>/<c>month</c>/<c>day</c>
/// dimensions of a time series means chronologically. The default <c>desc</c> orders them by the
/// metric instead, so a monthly report charts its priciest month first rather than in time
/// order — set <c>a_to_z</c> for a time series you intend to export.
/// A report with a forecast is always charted chronologically and ignores this field, and a
/// comparative <c>displayValues</c> mode requires <c>a_to_z</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortDimensions>))]
public sealed record SortDimensions : OpenStringEnum<SortDimensions>
{
    private SortDimensions(string value) : base(value)
    {
    }

    public static readonly SortDimensions Asc = new("asc");

    public static readonly SortDimensions Desc = new("desc");

    public static readonly SortDimensions AToZ = new("a_to_z");

    public TResult Match<TResult>(Func<TResult> onAsc,
        Func<TResult> onDesc,
        Func<TResult> onAToZ,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Asc => onAsc(),
            _ when this == Desc => onDesc(),
            _ when this == AToZ => onAToZ(),
            _ => otherwise(Value)
        };

    public void Match(Action onAsc, Action onDesc, Action onAToZ, Action<string> otherwise)
    {
        if (this == Asc) onAsc();
        else if (this == Desc) onDesc();
        else if (this == AToZ) onAToZ();
        else otherwise(Value);
    }
}
