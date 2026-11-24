using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderBy>))]
public sealed record OrderBy : OpenStringEnum<OrderBy>
{
    private OrderBy(string value) : base(value)
    {
    }

    public static readonly OrderBy Id = new("id");

    public static readonly OrderBy Name = new("name");

    public TResult Match<TResult>(Func<TResult> onId, Func<TResult> onName, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Name => onName(),
            _ => otherwise(Value)
        };

    public void Match(Action onId, Action onName, Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Name) onName();
        else otherwise(Value);
    }
}
