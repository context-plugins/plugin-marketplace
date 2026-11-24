using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Required direction used to sort results. Accepts asc or desc.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder>))]
public sealed record SortOrder : OpenStringEnum<SortOrder>
{
    private SortOrder(string value) : base(value)
    {
    }

    public static readonly SortOrder Asc = new("asc");

    public static readonly SortOrder Desc = new("desc");

    public TResult Match<TResult>(Func<TResult> onAsc, Func<TResult> onDesc, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Asc => onAsc(),
            _ when this == Desc => onDesc(),
            _ => otherwise(Value)
        };

    public void Match(Action onAsc, Action onDesc, Action<string> otherwise)
    {
        if (this == Asc) onAsc();
        else if (this == Desc) onDesc();
        else otherwise(Value);
    }
}
