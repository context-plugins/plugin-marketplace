using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates whether audio or text is used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi>))]
public sealed record TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi : OpenStringEnum<TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi>
{
    private TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi(string value) : base(value)
    {
    }

    public static readonly TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi Text = new("Text");

    public static readonly TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi Audio = new("Audio");

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
