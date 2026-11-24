using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The content type of the message string.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentTypeAmazonLexModelBuildingV2VersionsApi>))]
public sealed record ContentTypeAmazonLexModelBuildingV2VersionsApi : OpenStringEnum<ContentTypeAmazonLexModelBuildingV2VersionsApi>
{
    private ContentTypeAmazonLexModelBuildingV2VersionsApi(string value) : base(value)
    {
    }

    public static readonly ContentTypeAmazonLexModelBuildingV2VersionsApi PlainText = new("PlainText");

    public static readonly ContentTypeAmazonLexModelBuildingV2VersionsApi Ssml = new("SSML");

    public static readonly ContentTypeAmazonLexModelBuildingV2VersionsApi CustomPayload = new("CustomPayload");

    public TResult Match<TResult>(Func<TResult> onPlainText,
        Func<TResult> onSsml,
        Func<TResult> onCustomPayload,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PlainText => onPlainText(),
            _ when this == Ssml => onSsml(),
            _ when this == CustomPayload => onCustomPayload(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlainText, Action onSsml, Action onCustomPayload, Action<string> otherwise)
    {
        if (this == PlainText) onPlainText();
        else if (this == Ssml) onSsml();
        else if (this == CustomPayload) onCustomPayload();
        else otherwise(Value);
    }
}
