using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// If you set the processBehavior element to BUILD, Amazon Lex builds the bot so that it can be run. If you set the element to SAVE Amazon Lex saves the bot, but doesn't build it. If you don't specify this value, the default value is BUILD.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProcessBehavior>))]
public sealed record ProcessBehavior : OpenStringEnum<ProcessBehavior>
{
    private ProcessBehavior(string value) : base(value)
    {
    }

    public static readonly ProcessBehavior Save = new("SAVE");

    public static readonly ProcessBehavior Build = new("BUILD");

    public TResult Match<TResult>(Func<TResult> onSave, Func<TResult> onBuild, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Save => onSave(),
            _ when this == Build => onBuild(),
            _ => otherwise(Value)
        };

    public void Match(Action onSave, Action onBuild, Action<string> otherwise)
    {
        if (this == Save) onSave();
        else if (this == Build) onBuild();
        else otherwise(Value);
    }
}
