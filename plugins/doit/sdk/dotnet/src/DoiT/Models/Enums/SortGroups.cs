using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Orders the rows produced by <c>group</c>, both in the console and in a rendered <c>fileOutput</c>
/// export. <c>a_to_z</c> orders them by the dimension value, <c>asc</c>/<c>desc</c> by the metric. It does
/// not reorder the <c>rows</c> of a JSON result.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortGroups>))]
public sealed record SortGroups : OpenStringEnum<SortGroups>
{
    private SortGroups(string value) : base(value)
    {
    }

    public static readonly SortGroups Asc = new("asc");

    public static readonly SortGroups Desc = new("desc");

    public static readonly SortGroups AToZ = new("a_to_z");

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
