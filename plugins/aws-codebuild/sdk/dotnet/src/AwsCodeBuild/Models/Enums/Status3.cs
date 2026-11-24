using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The status of the report group. This property is read-only. This can be one of the following values: ACTIVE The report group is active. DELETING The report group is in the process of being deleted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Active = new("ACTIVE");

    public static readonly Status3 Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDeleting, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDeleting, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
