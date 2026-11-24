using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Required. The desired format of the notification message payloads.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PayloadFormat>))]
public sealed record PayloadFormat : OpenStringEnum<PayloadFormat>
{
    private PayloadFormat(string value) : base(value)
    {
    }

    public static readonly PayloadFormat PayloadFormatUnspecified = new("PAYLOAD_FORMAT_UNSPECIFIED");

    public static readonly PayloadFormat None = new("NONE");

    public static readonly PayloadFormat Json = new("JSON");

    public TResult Match<TResult>(Func<TResult> onPayloadFormatUnspecified,
        Func<TResult> onNone,
        Func<TResult> onJson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PayloadFormatUnspecified => onPayloadFormatUnspecified(),
            _ when this == None => onNone(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayloadFormatUnspecified, Action onNone, Action onJson, Action<string> otherwise)
    {
        if (this == PayloadFormatUnspecified) onPayloadFormatUnspecified();
        else if (this == None) onNone();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
