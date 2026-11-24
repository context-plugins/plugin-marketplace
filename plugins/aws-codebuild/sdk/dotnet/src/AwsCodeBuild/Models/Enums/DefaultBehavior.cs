using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The default behavior of outgoing traffic.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DefaultBehavior>))]
public sealed record DefaultBehavior : OpenStringEnum<DefaultBehavior>
{
    private DefaultBehavior(string value) : base(value)
    {
    }

    public static readonly DefaultBehavior AllowAll = new("ALLOW_ALL");

    public static readonly DefaultBehavior DenyAll = new("DENY_ALL");

    public TResult Match<TResult>(Func<TResult> onAllowAll, Func<TResult> onDenyAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllowAll => onAllowAll(),
            _ when this == DenyAll => onDenyAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllowAll, Action onDenyAll, Action<string> otherwise)
    {
        if (this == AllowAll) onAllowAll();
        else if (this == DenyAll) onDenyAll();
        else otherwise(Value);
    }
}
