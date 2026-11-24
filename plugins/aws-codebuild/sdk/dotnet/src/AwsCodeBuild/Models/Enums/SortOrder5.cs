using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Use to specify whether the results are returned in ascending or descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder5>))]
public sealed record SortOrder5 : OpenStringEnum<SortOrder5>
{
    private SortOrder5(string value) : base(value)
    {
    }

    public static readonly SortOrder5 Ascending = new("ASCENDING");

    public static readonly SortOrder5 Descending = new("DESCENDING");

    public TResult Match<TResult>(Func<TResult> onAscending,
        Func<TResult> onDescending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ascending => onAscending(),
            _ when this == Descending => onDescending(),
            _ => otherwise(Value)
        };

    public void Match(Action onAscending, Action onDescending, Action<string> otherwise)
    {
        if (this == Ascending) onAscending();
        else if (this == Descending) onDescending();
        else otherwise(Value);
    }
}
