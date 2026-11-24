using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Cannot be changed after creation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BusinessType1>))]
public sealed record BusinessType1 : OpenStringEnum<BusinessType1>
{
    private BusinessType1(string value) : base(value)
    {
    }

    public static readonly BusinessType1 Route = new("route");

    public TResult Match<TResult>(Func<TResult> onRoute, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Route => onRoute(),
            _ => otherwise(Value)
        };

    public void Match(Action onRoute, Action<string> otherwise)
    {
        if (this == Route) onRoute();
        else otherwise(Value);
    }
}
