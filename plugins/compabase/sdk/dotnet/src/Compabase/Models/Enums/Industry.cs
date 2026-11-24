using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Industry>))]
public sealed record Industry : OpenStringEnum<Industry>
{
    private Industry(string value) : base(value)
    {
    }

    public static readonly Industry It = new("it");

    public static readonly Industry Construction = new("construction");

    public static readonly Industry Medicine = new("medicine");

    public TResult Match<TResult>(Func<TResult> onIt,
        Func<TResult> onConstruction,
        Func<TResult> onMedicine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == It => onIt(),
            _ when this == Construction => onConstruction(),
            _ when this == Medicine => onMedicine(),
            _ => otherwise(Value)
        };

    public void Match(Action onIt, Action onConstruction, Action onMedicine, Action<string> otherwise)
    {
        if (this == It) onIt();
        else if (this == Construction) onConstruction();
        else if (this == Medicine) onMedicine();
        else otherwise(Value);
    }
}
