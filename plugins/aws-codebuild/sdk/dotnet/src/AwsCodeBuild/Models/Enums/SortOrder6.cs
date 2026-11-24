using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The order in which to list shared build projects. Valid values include: ASCENDING: List in ascending order. DESCENDING: List in descending order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrder6>))]
public sealed record SortOrder6 : OpenStringEnum<SortOrder6>
{
    private SortOrder6(string value) : base(value)
    {
    }

    public static readonly SortOrder6 Ascending = new("ASCENDING");

    public static readonly SortOrder6 Descending = new("DESCENDING");

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
