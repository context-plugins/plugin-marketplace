using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Upcoming>))]
public sealed record Upcoming : OpenStringEnum<Upcoming>
{
    private Upcoming(string value) : base(value)
    {
    }

    public static readonly Upcoming All = new("all");

    public static readonly Upcoming Only = new("only");

    public static readonly Upcoming Without = new("without");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onOnly,
        Func<TResult> onWithout,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Only => onOnly(),
            _ when this == Without => onWithout(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onOnly, Action onWithout, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Only) onOnly();
        else if (this == Without) onWithout();
        else otherwise(Value);
    }
}
