using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Type of business ID could be ABN Or ACN.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BusinessIdNoType>))]
public sealed record BusinessIdNoType : OpenStringEnum<BusinessIdNoType>
{
    private BusinessIdNoType(string value) : base(value)
    {
    }

    public static readonly BusinessIdNoType Abn = new("ABN");

    public static readonly BusinessIdNoType Acn = new("ACN");

    public TResult Match<TResult>(Func<TResult> onAbn, Func<TResult> onAcn, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Abn => onAbn(),
            _ when this == Acn => onAcn(),
            _ => otherwise(Value)
        };

    public void Match(Action onAbn, Action onAcn, Action<string> otherwise)
    {
        if (this == Abn) onAbn();
        else if (this == Acn) onAcn();
        else otherwise(Value);
    }
}
