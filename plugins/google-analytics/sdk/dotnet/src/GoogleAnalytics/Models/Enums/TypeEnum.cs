using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Required. Immutable. The type of this DataStream resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum DataStreamTypeUnspecified = new("DATA_STREAM_TYPE_UNSPECIFIED");

    public static readonly TypeEnum WebDataStream = new("WEB_DATA_STREAM");

    public static readonly TypeEnum AndroidAppDataStream = new("ANDROID_APP_DATA_STREAM");

    public static readonly TypeEnum IosAppDataStream = new("IOS_APP_DATA_STREAM");

    public TResult Match<TResult>(Func<TResult> onDataStreamTypeUnspecified,
        Func<TResult> onWebDataStream,
        Func<TResult> onAndroidAppDataStream,
        Func<TResult> onIosAppDataStream,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataStreamTypeUnspecified => onDataStreamTypeUnspecified(),
            _ when this == WebDataStream => onWebDataStream(),
            _ when this == AndroidAppDataStream => onAndroidAppDataStream(),
            _ when this == IosAppDataStream => onIosAppDataStream(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataStreamTypeUnspecified,
        Action onWebDataStream,
        Action onAndroidAppDataStream,
        Action onIosAppDataStream,
        Action<string> otherwise)
    {
        if (this == DataStreamTypeUnspecified) onDataStreamTypeUnspecified();
        else if (this == WebDataStream) onWebDataStream();
        else if (this == AndroidAppDataStream) onAndroidAppDataStream();
        else if (this == IosAppDataStream) onIosAppDataStream();
        else otherwise(Value);
    }
}
