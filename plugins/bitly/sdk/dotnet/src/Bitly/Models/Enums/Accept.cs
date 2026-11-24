using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Accept>))]
public sealed record Accept : OpenStringEnum<Accept>
{
    private Accept(string value) : base(value)
    {
    }

    public static readonly Accept ApplicationJson = new("application/json");

    public static readonly Accept ImageSvgXml = new("image/svg+xml");

    public static readonly Accept ImagePng = new("image/png");

    public TResult Match<TResult>(Func<TResult> onApplicationJson,
        Func<TResult> onImageSvgXml,
        Func<TResult> onImagePng,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApplicationJson => onApplicationJson(),
            _ when this == ImageSvgXml => onImageSvgXml(),
            _ when this == ImagePng => onImagePng(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplicationJson, Action onImageSvgXml, Action onImagePng, Action<string> otherwise)
    {
        if (this == ApplicationJson) onApplicationJson();
        else if (this == ImageSvgXml) onImageSvgXml();
        else if (this == ImagePng) onImagePng();
        else otherwise(Value);
    }
}
