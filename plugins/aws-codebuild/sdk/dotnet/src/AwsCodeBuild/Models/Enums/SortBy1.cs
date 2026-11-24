using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The criterion to be used to list build report groups. Valid values include: CREATED_TIME: List based on when each report group was created. LAST_MODIFIED_TIME: List based on when each report group was last changed. NAME: List based on each report group's name.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy1>))]
public sealed record SortBy1 : OpenStringEnum<SortBy1>
{
    private SortBy1(string value) : base(value)
    {
    }

    public static readonly SortBy1 Name = new("NAME");

    public static readonly SortBy1 CreatedTime = new("CREATED_TIME");

    public static readonly SortBy1 LastModifiedTime = new("LAST_MODIFIED_TIME");

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
