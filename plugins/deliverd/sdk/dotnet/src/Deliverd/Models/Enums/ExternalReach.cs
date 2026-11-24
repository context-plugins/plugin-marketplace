using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// Who its output reaches, furthest first
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExternalReach>))]
public sealed record ExternalReach : OpenStringEnum<ExternalReach>
{
    private ExternalReach(string value) : base(value)
    {
    }

    public static readonly ExternalReach Internal = new("internal");

    public static readonly ExternalReach Customer = new("customer");

    public static readonly ExternalReach Public = new("public");

    public static readonly ExternalReach Regulator = new("regulator");

    public TResult Match<TResult>(Func<TResult> onInternal,
        Func<TResult> onCustomer,
        Func<TResult> onPublic,
        Func<TResult> onRegulator,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Internal => onInternal(),
            _ when this == Customer => onCustomer(),
            _ when this == Public => onPublic(),
            _ when this == Regulator => onRegulator(),
            _ => otherwise(Value)
        };

    public void Match(Action onInternal,
        Action onCustomer,
        Action onPublic,
        Action onRegulator,
        Action<string> otherwise)
    {
        if (this == Internal) onInternal();
        else if (this == Customer) onCustomer();
        else if (this == Public) onPublic();
        else if (this == Regulator) onRegulator();
        else otherwise(Value);
    }
}
