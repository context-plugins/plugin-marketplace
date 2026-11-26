using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Collapse>))]
public sealed record Collapse : OpenStringEnum<Collapse>
{
    private Collapse(string value) : base(value)
    {
    }

    public static readonly Collapse Story = new("story");

    public TResult Match<TResult>(Func<TResult> onStory, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Story => onStory(),
            _ => otherwise(Value)
        };

    public void Match(Action onStory, Action<string> otherwise)
    {
        if (this == Story) onStory();
        else otherwise(Value);
    }
}
