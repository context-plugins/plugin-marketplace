using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2BundleSocialPostApi>))]
public sealed record Status2BundleSocialPostApi : OpenStringEnum<Status2BundleSocialPostApi>
{
    private Status2BundleSocialPostApi(string value) : base(value)
    {
    }

    public static readonly Status2BundleSocialPostApi MediaUploaded = new("MEDIA_UPLOADED");

    public static readonly Status2BundleSocialPostApi MediaProcessing = new("MEDIA_PROCESSING");

    public static readonly Status2BundleSocialPostApi Published = new("PUBLISHED");

    public TResult Match<TResult>(Func<TResult> onMediaUploaded,
        Func<TResult> onMediaProcessing,
        Func<TResult> onPublished,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MediaUploaded => onMediaUploaded(),
            _ when this == MediaProcessing => onMediaProcessing(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onMediaUploaded, Action onMediaProcessing, Action onPublished, Action<string> otherwise)
    {
        if (this == MediaUploaded) onMediaUploaded();
        else if (this == MediaProcessing) onMediaProcessing();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
