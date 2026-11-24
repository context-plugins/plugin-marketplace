using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Allowed categories when creating insights via the public API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreateCategory>))]
public sealed record CreateCategory : OpenStringEnum<CreateCategory>
{
    private CreateCategory(string value) : base(value)
    {
    }

    public static readonly CreateCategory FinOps = new("FinOps");

    public static readonly CreateCategory Security = new("Security");

    public TResult Match<TResult>(Func<TResult> onFinOps, Func<TResult> onSecurity, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FinOps => onFinOps(),
            _ when this == Security => onSecurity(),
            _ => otherwise(Value)
        };

    public void Match(Action onFinOps, Action onSecurity, Action<string> otherwise)
    {
        if (this == FinOps) onFinOps();
        else if (this == Security) onSecurity();
        else otherwise(Value);
    }
}
