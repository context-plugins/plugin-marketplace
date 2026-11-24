using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether the test set is audio or text data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModalityAmazonLexModelBuildingV2TestsetsApi>))]
public sealed record ModalityAmazonLexModelBuildingV2TestsetsApi : OpenStringEnum<ModalityAmazonLexModelBuildingV2TestsetsApi>
{
    private ModalityAmazonLexModelBuildingV2TestsetsApi(string value) : base(value)
    {
    }

    public static readonly ModalityAmazonLexModelBuildingV2TestsetsApi Text = new("Text");

    public static readonly ModalityAmazonLexModelBuildingV2TestsetsApi Audio = new("Audio");

    public TResult Match<TResult>(Func<TResult> onText, Func<TResult> onAudio, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Audio => onAudio(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onAudio, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Audio) onAudio();
        else otherwise(Value);
    }
}
