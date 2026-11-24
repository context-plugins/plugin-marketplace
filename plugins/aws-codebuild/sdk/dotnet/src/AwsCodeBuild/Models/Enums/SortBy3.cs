using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid values include: ARN: List based on the ARN. MODIFIED_TIME: List based on when information about the shared report group was last changed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy3>))]
public sealed record SortBy3 : OpenStringEnum<SortBy3>
{
    private SortBy3(string value) : base(value)
    {
    }

    public static readonly SortBy3 Arn = new("ARN");

    public static readonly SortBy3 ModifiedTime = new("MODIFIED_TIME");

    public TResult Match<TResult>(Func<TResult> onArn, Func<TResult> onModifiedTime, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Arn => onArn(),
            _ when this == ModifiedTime => onModifiedTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onArn, Action onModifiedTime, Action<string> otherwise)
    {
        if (this == Arn) onArn();
        else if (this == ModifiedTime) onModifiedTime();
        else otherwise(Value);
    }
}
