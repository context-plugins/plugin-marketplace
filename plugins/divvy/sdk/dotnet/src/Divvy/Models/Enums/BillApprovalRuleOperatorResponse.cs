using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Response enum of operators supported for bill policy approval rules.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillApprovalRuleOperatorResponse>))]
public sealed record BillApprovalRuleOperatorResponse : OpenStringEnum<BillApprovalRuleOperatorResponse>
{
    private BillApprovalRuleOperatorResponse(string value) : base(value)
    {
    }

    public static readonly BillApprovalRuleOperatorResponse Lt = new("lt");

    public static readonly BillApprovalRuleOperatorResponse Gte = new("gte");

    public static readonly BillApprovalRuleOperatorResponse In = new("in");

    public static readonly BillApprovalRuleOperatorResponse Nin = new("nin");

    public static readonly BillApprovalRuleOperatorResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onLt,
        Func<TResult> onGte,
        Func<TResult> onIn,
        Func<TResult> onNin,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Lt => onLt(),
            _ when this == Gte => onGte(),
            _ when this == In => onIn(),
            _ when this == Nin => onNin(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onLt,
        Action onGte,
        Action onIn,
        Action onNin,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Lt) onLt();
        else if (this == Gte) onGte();
        else if (this == In) onIn();
        else if (this == Nin) onNin();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
