using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CategoryAppliedInputType>))]
public sealed record CategoryAppliedInputType : OpenStringEnum<CategoryAppliedInputType>
{
    private CategoryAppliedInputType(string value) : base(value)
    {
    }

    public static readonly CategoryAppliedInputType Text = new("text");

    public static readonly CategoryAppliedInputType Image = new("image");

    public TResult Match<TResult>(Func<TResult> onText, Func<TResult> onImage, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Image => onImage(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onImage, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Image) onImage();
        else otherwise(Value);
    }
}
