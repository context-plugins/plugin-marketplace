using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The direction of the request. Defaults to <c>asc</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RequestDirection>))]
public sealed record RequestDirection : OpenStringEnum<RequestDirection>
{
    private RequestDirection(string value) : base(value)
    {
    }

    public static readonly RequestDirection Asc = new("asc");

    public static readonly RequestDirection Desc = new("desc");

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
