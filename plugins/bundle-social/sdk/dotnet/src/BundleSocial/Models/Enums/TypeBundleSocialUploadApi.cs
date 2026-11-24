using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeBundleSocialUploadApi>))]
public sealed record TypeBundleSocialUploadApi : OpenStringEnum<TypeBundleSocialUploadApi>
{
    private TypeBundleSocialUploadApi(string value) : base(value)
    {
    }

    public static readonly TypeBundleSocialUploadApi Image = new("image");

    public static readonly TypeBundleSocialUploadApi Video = new("video");

    public static readonly TypeBundleSocialUploadApi Document = new("document");

    public TResult Match<TResult>(Func<TResult> onImage,
        Func<TResult> onVideo,
        Func<TResult> onDocument,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ when this == Document => onDocument(),
            _ => otherwise(Value)
        };

    public void Match(Action onImage, Action onVideo, Action onDocument, Action<string> otherwise)
    {
        if (this == Image) onImage();
        else if (this == Video) onVideo();
        else if (this == Document) onDocument();
        else otherwise(Value);
    }
}
