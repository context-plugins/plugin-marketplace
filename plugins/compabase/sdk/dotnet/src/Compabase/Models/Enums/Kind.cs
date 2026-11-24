using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Supplies = new("supplies");

    public static readonly Kind Services = new("services");

    public static readonly Kind Works = new("works");

    public TResult Match<TResult>(Func<TResult> onSupplies,
        Func<TResult> onServices,
        Func<TResult> onWorks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Supplies => onSupplies(),
            _ when this == Services => onServices(),
            _ when this == Works => onWorks(),
            _ => otherwise(Value)
        };

    public void Match(Action onSupplies, Action onServices, Action onWorks, Action<string> otherwise)
    {
        if (this == Supplies) onSupplies();
        else if (this == Services) onServices();
        else if (this == Works) onWorks();
        else otherwise(Value);
    }
}
