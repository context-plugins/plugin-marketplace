using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Target linter for the style guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Linter1>))]
public sealed record Linter1 : OpenStringEnum<Linter1>
{
    private Linter1(string value) : base(value)
    {
    }

    public static readonly Linter1 LinterUnspecified = new("LINTER_UNSPECIFIED");

    public static readonly Linter1 Spectral = new("SPECTRAL");

    public static readonly Linter1 Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onLinterUnspecified,
        Func<TResult> onSpectral,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LinterUnspecified => onLinterUnspecified(),
            _ when this == Spectral => onSpectral(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onLinterUnspecified, Action onSpectral, Action onOther, Action<string> otherwise)
    {
        if (this == LinterUnspecified) onLinterUnspecified();
        else if (this == Spectral) onSpectral();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
