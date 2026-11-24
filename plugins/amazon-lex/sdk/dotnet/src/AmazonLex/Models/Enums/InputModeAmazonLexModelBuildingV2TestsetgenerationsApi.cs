using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The selection to filter by input mode for the conversation logs.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputModeAmazonLexModelBuildingV2TestsetgenerationsApi>))]
public sealed record InputModeAmazonLexModelBuildingV2TestsetgenerationsApi : OpenStringEnum<InputModeAmazonLexModelBuildingV2TestsetgenerationsApi>
{
    private InputModeAmazonLexModelBuildingV2TestsetgenerationsApi(string value) : base(value)
    {
    }

    public static readonly InputModeAmazonLexModelBuildingV2TestsetgenerationsApi Speech = new("Speech");

    public static readonly InputModeAmazonLexModelBuildingV2TestsetgenerationsApi Text = new("Text");

    public TResult Match<TResult>(Func<TResult> onSpeech, Func<TResult> onText, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Speech => onSpeech(),
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpeech, Action onText, Action<string> otherwise)
    {
        if (this == Speech) onSpeech();
        else if (this == Text) onText();
        else otherwise(Value);
    }
}
