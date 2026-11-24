using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The strategy used to merge existing bot or bot locale definitions with the imported definition.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MergeStrategy1>))]
public sealed record MergeStrategy1 : OpenStringEnum<MergeStrategy1>
{
    private MergeStrategy1(string value) : base(value)
    {
    }

    public static readonly MergeStrategy1 Overwrite = new("Overwrite");

    public static readonly MergeStrategy1 FailOnConflict = new("FailOnConflict");

    public static readonly MergeStrategy1 Append = new("Append");

    public TResult Match<TResult>(Func<TResult> onOverwrite,
        Func<TResult> onFailOnConflict,
        Func<TResult> onAppend,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Overwrite => onOverwrite(),
            _ when this == FailOnConflict => onFailOnConflict(),
            _ when this == Append => onAppend(),
            _ => otherwise(Value)
        };

    public void Match(Action onOverwrite, Action onFailOnConflict, Action onAppend, Action<string> otherwise)
    {
        if (this == Overwrite) onOverwrite();
        else if (this == FailOnConflict) onFailOnConflict();
        else if (this == Append) onAppend();
        else otherwise(Value);
    }
}
