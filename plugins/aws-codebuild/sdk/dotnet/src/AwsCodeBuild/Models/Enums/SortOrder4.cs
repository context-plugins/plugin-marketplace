using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Used to specify the order to sort the list of returned report groups. Valid values are ASCENDING and DESCENDING.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder4>))]
public sealed record SortOrder4 : OpenStringEnum<SortOrder4>
{
    private SortOrder4(string value) : base(value)
    {
    }

    public static readonly SortOrder4 Ascending = new("ASCENDING");

    public static readonly SortOrder4 Descending = new("DESCENDING");

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
