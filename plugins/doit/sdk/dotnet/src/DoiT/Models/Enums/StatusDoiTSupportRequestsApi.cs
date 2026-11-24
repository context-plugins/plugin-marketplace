using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The status to set on the request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTSupportRequestsApi>))]
public sealed record StatusDoiTSupportRequestsApi : OpenStringEnum<StatusDoiTSupportRequestsApi>
{
    private StatusDoiTSupportRequestsApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTSupportRequestsApi Open = new("open");

    public static readonly StatusDoiTSupportRequestsApi Pending = new("pending");

    public static readonly StatusDoiTSupportRequestsApi Hold = new("hold");

    public static readonly StatusDoiTSupportRequestsApi Solved = new("solved");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onPending,
        Func<TResult> onHold,
        Func<TResult> onSolved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Pending => onPending(),
            _ when this == Hold => onHold(),
            _ when this == Solved => onSolved(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onPending, Action onHold, Action onSolved, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Pending) onPending();
        else if (this == Hold) onHold();
        else if (this == Solved) onSolved();
        else otherwise(Value);
    }
}
