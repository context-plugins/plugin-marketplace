using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SimilarEnum>))]
public sealed record SimilarEnum : OpenStringEnum<SimilarEnum>
{
    private SimilarEnum(string value) : base(value)
    {
    }

    public static readonly SimilarEnum To = new("to");

    public static readonly SimilarEnum From = new("from");

    public TResult Match<TResult>(Func<TResult> onTo, Func<TResult> onFrom, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == To => onTo(),
            _ when this == From => onFrom(),
            _ => otherwise(Value)
        };

    public void Match(Action onTo, Action onFrom, Action<string> otherwise)
    {
        if (this == To) onTo();
        else if (this == From) onFrom();
        else otherwise(Value);
    }
}
