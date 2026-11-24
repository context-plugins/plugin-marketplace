using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevApprovalsApi>))]
public sealed record StatusDeliverdDevApprovalsApi : OpenStringEnum<StatusDeliverdDevApprovalsApi>
{
    private StatusDeliverdDevApprovalsApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevApprovalsApi Ok = new("ok");

    public static readonly StatusDeliverdDevApprovalsApi Warning = new("warning");

    public static readonly StatusDeliverdDevApprovalsApi Info = new("info");

    public TResult Match<TResult>(Func<TResult> onOk,
        Func<TResult> onWarning,
        Func<TResult> onInfo,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Warning => onWarning(),
            _ when this == Info => onInfo(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onWarning, Action onInfo, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Warning) onWarning();
        else if (this == Info) onInfo();
        else otherwise(Value);
    }
}
