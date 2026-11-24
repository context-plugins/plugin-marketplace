using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The field to order the QR codes. The default is <c>createdAt</c>, and the order of sorting is always descending.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortCodeqrIoQrCodesApi>))]
public sealed record SortCodeqrIoQrCodesApi : OpenStringEnum<SortCodeqrIoQrCodesApi>
{
    private SortCodeqrIoQrCodesApi(string value) : base(value)
    {
    }

    public static readonly SortCodeqrIoQrCodesApi CreatedAt = new("createdAt");

    public static readonly SortCodeqrIoQrCodesApi Scans = new("scans");

    public static readonly SortCodeqrIoQrCodesApi LastClicked = new("lastClicked");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onScans,
        Func<TResult> onLastClicked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == Scans => onScans(),
            _ when this == LastClicked => onLastClicked(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt, Action onScans, Action onLastClicked, Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == Scans) onScans();
        else if (this == LastClicked) onLastClicked();
        else otherwise(Value);
    }
}
