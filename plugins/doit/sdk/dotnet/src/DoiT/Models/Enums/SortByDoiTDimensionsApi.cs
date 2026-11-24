using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Sort by <c>id</c>, <c>type</c>, or <c>label</c>. <c>key</c> is an alias for <c>id</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByDoiTDimensionsApi>))]
public sealed record SortByDoiTDimensionsApi : OpenStringEnum<SortByDoiTDimensionsApi>
{
    private SortByDoiTDimensionsApi(string value) : base(value)
    {
    }

    public static readonly SortByDoiTDimensionsApi Id = new("id");

    public static readonly SortByDoiTDimensionsApi Type = new("type");

    public static readonly SortByDoiTDimensionsApi Label = new("label");

    public static readonly SortByDoiTDimensionsApi Key = new("key");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onType,
        Func<TResult> onLabel,
        Func<TResult> onKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Type => onType(),
            _ when this == Label => onLabel(),
            _ when this == Key => onKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onId, Action onType, Action onLabel, Action onKey, Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Type) onType();
        else if (this == Label) onLabel();
        else if (this == Key) onKey();
        else otherwise(Value);
    }
}
