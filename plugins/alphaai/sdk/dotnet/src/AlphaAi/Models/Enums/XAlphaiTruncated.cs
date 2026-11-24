using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAlphaiTruncated>))]
public sealed record XAlphaiTruncated : OpenStringEnum<XAlphaiTruncated>
{
    private XAlphaiTruncated(string value) : base(value)
    {
    }

    public static readonly XAlphaiTruncated RowCap = new("row_cap");

    public static readonly XAlphaiTruncated ArchiveHorizon = new("archive_horizon");

    public static readonly XAlphaiTruncated False = new("false");

    public TResult Match<TResult>(Func<TResult> onRowCap,
        Func<TResult> onArchiveHorizon,
        Func<TResult> onFalse,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RowCap => onRowCap(),
            _ when this == ArchiveHorizon => onArchiveHorizon(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onRowCap, Action onArchiveHorizon, Action onFalse, Action<string> otherwise)
    {
        if (this == RowCap) onRowCap();
        else if (this == ArchiveHorizon) onArchiveHorizon();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
