using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Weight>))]
public sealed record Weight : OpenStringEnum<Weight>
{
    private Weight(string value) : base(value)
    {
    }

    public static readonly Weight Normal = new("normal");

    public static readonly Weight Bold = new("bold");

    public TResult Match<TResult>(Func<TResult> onNormal, Func<TResult> onBold, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Normal => onNormal(),
            _ when this == Bold => onBold(),
            _ => otherwise(Value)
        };

    public void Match(Action onNormal, Action onBold, Action<string> otherwise)
    {
        if (this == Normal) onNormal();
        else if (this == Bold) onBold();
        else otherwise(Value);
    }
}
