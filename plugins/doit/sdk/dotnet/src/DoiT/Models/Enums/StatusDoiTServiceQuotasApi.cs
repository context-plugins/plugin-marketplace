using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Normalized utilization status. Warning begins at 80 percent; exceeded begins at 100 percent.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTServiceQuotasApi>))]
public sealed record StatusDoiTServiceQuotasApi : OpenStringEnum<StatusDoiTServiceQuotasApi>
{
    private StatusDoiTServiceQuotasApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTServiceQuotasApi Ok = new("ok");

    public static readonly StatusDoiTServiceQuotasApi Warning = new("warning");

    public static readonly StatusDoiTServiceQuotasApi Exceeded = new("exceeded");

    public TResult Match<TResult>(Func<TResult> onOk,
        Func<TResult> onWarning,
        Func<TResult> onExceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Warning => onWarning(),
            _ when this == Exceeded => onExceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onWarning, Action onExceeded, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Warning) onWarning();
        else if (this == Exceeded) onExceeded();
        else otherwise(Value);
    }
}
