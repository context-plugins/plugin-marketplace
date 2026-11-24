using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDidlogicComRiskChecksApi>))]
public sealed record StatusDidlogicComRiskChecksApi : OpenStringEnum<StatusDidlogicComRiskChecksApi>
{
    private StatusDidlogicComRiskChecksApi(string value) : base(value)
    {
    }

    public static readonly StatusDidlogicComRiskChecksApi Pending = new("pending");

    public static readonly StatusDidlogicComRiskChecksApi Completed = new("completed");

    public static readonly StatusDidlogicComRiskChecksApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
