using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The criterion to be used to list compute fleet names. Valid values include: CREATED_TIME: List based on when each compute fleet was created. LAST_MODIFIED_TIME: List based on when information about each compute fleet was last changed. NAME: List based on each compute fleet's name. Use sortOrder to specify in what order to list the compute fleet names based on the preceding criteria.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByAwsCodeBuildFleetApi>))]
public sealed record SortByAwsCodeBuildFleetApi : OpenStringEnum<SortByAwsCodeBuildFleetApi>
{
    private SortByAwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly SortByAwsCodeBuildFleetApi Name = new("NAME");

    public static readonly SortByAwsCodeBuildFleetApi CreatedTime = new("CREATED_TIME");

    public static readonly SortByAwsCodeBuildFleetApi LastModifiedTime = new("LAST_MODIFIED_TIME");

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
