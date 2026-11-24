using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The order in which sandbox records should be retrieved.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortOrderAwsCodeBuildCommandExecutionApi>))]
public sealed record SortOrderAwsCodeBuildCommandExecutionApi : OpenStringEnum<SortOrderAwsCodeBuildCommandExecutionApi>
{
    private SortOrderAwsCodeBuildCommandExecutionApi(string value) : base(value)
    {
    }

    public static readonly SortOrderAwsCodeBuildCommandExecutionApi Ascending = new("ASCENDING");

    public static readonly SortOrderAwsCodeBuildCommandExecutionApi Descending = new("DESCENDING");

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
