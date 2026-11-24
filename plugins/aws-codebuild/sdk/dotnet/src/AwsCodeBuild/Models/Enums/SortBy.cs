using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The criterion to be used to list build project names. Valid values include: CREATED_TIME: List based on when each build project was created. LAST_MODIFIED_TIME: List based on when information about each build project was last changed. NAME: List based on each build project's name. Use sortOrder to specify in what order to list the build project names based on the preceding criteria.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy Name = new("NAME");

    public static readonly SortBy CreatedTime = new("CREATED_TIME");

    public static readonly SortBy LastModifiedTime = new("LAST_MODIFIED_TIME");

    public TResult Match<TResult>(Func<TResult> onName,
        Func<TResult> onCreatedTime,
        Func<TResult> onLastModifiedTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == CreatedTime => onCreatedTime(),
            _ when this == LastModifiedTime => onLastModifiedTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onName, Action onCreatedTime, Action onLastModifiedTime, Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == CreatedTime) onCreatedTime();
        else if (this == LastModifiedTime) onLastModifiedTime();
        else otherwise(Value);
    }
}
