using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

/// <summary>
/// <c>ask</c> sends every outward action to a human approval link first; <c>auto</c> runs Tier B directly. Destructive actions always need the link.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApprovalPolicy>))]
public sealed record ApprovalPolicy : OpenStringEnum<ApprovalPolicy>
{
    private ApprovalPolicy(string value) : base(value)
    {
    }

    public static readonly ApprovalPolicy Ask = new("ask");

    public static readonly ApprovalPolicy Auto = new("auto");

    public TResult Match<TResult>(Func<TResult> onAsk, Func<TResult> onAuto, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ask => onAsk(),
            _ when this == Auto => onAuto(),
            _ => otherwise(Value)
        };

    public void Match(Action onAsk, Action onAuto, Action<string> otherwise)
    {
        if (this == Ask) onAsk();
        else if (this == Auto) onAuto();
        else otherwise(Value);
    }
}
