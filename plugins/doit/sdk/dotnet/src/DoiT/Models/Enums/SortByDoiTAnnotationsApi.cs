using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByDoiTAnnotationsApi>))]
public sealed record SortByDoiTAnnotationsApi : OpenStringEnum<SortByDoiTAnnotationsApi>
{
    private SortByDoiTAnnotationsApi(string value) : base(value)
    {
    }

    public static readonly SortByDoiTAnnotationsApi Id = new("id");

    public static readonly SortByDoiTAnnotationsApi Content = new("content");

    public static readonly SortByDoiTAnnotationsApi Timestamp = new("timestamp");

    public static readonly SortByDoiTAnnotationsApi TimeCreated = new("timeCreated");

    public static readonly SortByDoiTAnnotationsApi TimeModified = new("timeModified");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onContent,
        Func<TResult> onTimestamp,
        Func<TResult> onTimeCreated,
        Func<TResult> onTimeModified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Content => onContent(),
            _ when this == Timestamp => onTimestamp(),
            _ when this == TimeCreated => onTimeCreated(),
            _ when this == TimeModified => onTimeModified(),
            _ => otherwise(Value)
        };

    public void Match(Action onId,
        Action onContent,
        Action onTimestamp,
        Action onTimeCreated,
        Action onTimeModified,
        Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Content) onContent();
        else if (this == Timestamp) onTimestamp();
        else if (this == TimeCreated) onTimeCreated();
        else if (this == TimeModified) onTimeModified();
        else otherwise(Value);
    }
}
