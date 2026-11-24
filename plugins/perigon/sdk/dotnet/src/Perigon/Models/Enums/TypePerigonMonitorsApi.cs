using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Filter by geographic content scope. Accepts all, local, or world.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypePerigonMonitorsApi>))]
public sealed record TypePerigonMonitorsApi : OpenStringEnum<TypePerigonMonitorsApi>
{
    private TypePerigonMonitorsApi(string value) : base(value)
    {
    }

    public static readonly TypePerigonMonitorsApi All = new("ALL");

    public static readonly TypePerigonMonitorsApi Local = new("LOCAL");

    public static readonly TypePerigonMonitorsApi World = new("WORLD");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onLocal,
        Func<TResult> onWorld,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Local => onLocal(),
            _ when this == World => onWorld(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onLocal, Action onWorld, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Local) onLocal();
        else if (this == World) onWorld();
        else otherwise(Value);
    }
}
