using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Name of the linter used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Linter>))]
public sealed record Linter : OpenStringEnum<Linter>
{
    private Linter(string value) : base(value)
    {
    }

    public static readonly Linter LinterUnspecified = new("LINTER_UNSPECIFIED");

    public static readonly Linter Spectral = new("SPECTRAL");

    public static readonly Linter Other = new("OTHER");

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
