using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// SSO authentication requirement for this organization. Possible values: "none", "any". Omitted when no auth requirements are configured.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RequireSso>))]
public sealed record RequireSso : OpenStringEnum<RequireSso>
{
    private RequireSso(string value) : base(value)
    {
    }

    public static readonly RequireSso None = new("none");

    public static readonly RequireSso Any = new("any");

    public TResult Match<TResult>(Func<TResult> onNone, Func<TResult> onAny, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Any => onAny(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onAny, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Any) onAny();
        else otherwise(Value);
    }
}
