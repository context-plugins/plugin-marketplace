using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Sort order for ranking results.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort AToZ = new("a_to_z");

    public static readonly Sort Asc = new("asc");

    public static readonly Sort Desc = new("desc");

    public TResult Match<TResult>(Func<TResult> onAToZ,
        Func<TResult> onAsc,
        Func<TResult> onDesc,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AToZ => onAToZ(),
            _ when this == Asc => onAsc(),
            _ when this == Desc => onDesc(),
            _ => otherwise(Value)
        };

    public void Match(Action onAToZ, Action onAsc, Action onDesc, Action<string> otherwise)
    {
        if (this == AToZ) onAToZ();
        else if (this == Asc) onAsc();
        else if (this == Desc) onDesc();
        else otherwise(Value);
    }
}
