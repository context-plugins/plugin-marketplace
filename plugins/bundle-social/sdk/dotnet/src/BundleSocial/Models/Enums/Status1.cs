using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 MediaUploaded = new("MEDIA_UPLOADED");

    public static readonly Status1 MediaProcessing = new("MEDIA_PROCESSING");

    public static readonly Status1 Published = new("PUBLISHED");

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
