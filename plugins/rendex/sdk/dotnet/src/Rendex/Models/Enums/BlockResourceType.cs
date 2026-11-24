using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BlockResourceType>))]
public sealed record BlockResourceType : OpenStringEnum<BlockResourceType>
{
    private BlockResourceType(string value) : base(value)
    {
    }

    public static readonly BlockResourceType Font = new("font");

    public static readonly BlockResourceType Image = new("image");

    public static readonly BlockResourceType Media = new("media");

    public static readonly BlockResourceType Stylesheet = new("stylesheet");

    public static readonly BlockResourceType Other = new("other");

    public TResult Match<TResult>(Func<TResult> onFont,
        Func<TResult> onImage,
        Func<TResult> onMedia,
        Func<TResult> onStylesheet,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Font => onFont(),
            _ when this == Image => onImage(),
            _ when this == Media => onMedia(),
            _ when this == Stylesheet => onStylesheet(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onFont,
        Action onImage,
        Action onMedia,
        Action onStylesheet,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Font) onFont();
        else if (this == Image) onImage();
        else if (this == Media) onMedia();
        else if (this == Stylesheet) onStylesheet();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
