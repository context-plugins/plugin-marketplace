using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// Which export shape to produce.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportType>))]
public sealed record ExportType : OpenStringEnum<ExportType>
{
    private ExportType(string value) : base(value)
    {
    }

    public static readonly ExportType LinkEngagementsBatch = new("link_engagements_batch");

    public static readonly ExportType LinksList = new("links_list");

    public static readonly ExportType QrCodesList = new("qr_codes_list");

    public TResult Match<TResult>(Func<TResult> onLinkEngagementsBatch,
        Func<TResult> onLinksList,
        Func<TResult> onQrCodesList,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LinkEngagementsBatch => onLinkEngagementsBatch(),
            _ when this == LinksList => onLinksList(),
            _ when this == QrCodesList => onQrCodesList(),
            _ => otherwise(Value)
        };

    public void Match(Action onLinkEngagementsBatch, Action onLinksList, Action onQrCodesList, Action<string> otherwise)
    {
        if (this == LinkEngagementsBatch) onLinkEngagementsBatch();
        else if (this == LinksList) onLinksList();
        else if (this == QrCodesList) onQrCodesList();
        else otherwise(Value);
    }
}
