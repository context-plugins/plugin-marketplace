using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The strategy used when there was a name conflict between the imported resource and an existing resource. When the merge strategy is FailOnConflict existing resources are not overwritten and the import fails.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MergeStrategy>))]
public sealed record MergeStrategy : OpenStringEnum<MergeStrategy>
{
    private MergeStrategy(string value) : base(value)
    {
    }

    public static readonly MergeStrategy Overwrite = new("Overwrite");

    public static readonly MergeStrategy FailOnConflict = new("FailOnConflict");

    public static readonly MergeStrategy Append = new("Append");

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
