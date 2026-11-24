using System;
using System.Text.Json.Serialization;
using BetterStack.Core.Enum;

namespace BetterStack.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MonitorType>))]
public sealed record MonitorType : OpenStringEnum<MonitorType>
{
    private MonitorType(string value) : base(value)
    {
    }

    public static readonly MonitorType Status = new("status");

    public static readonly MonitorType ExpectedStatusCode = new("expected_status_code");

    public static readonly MonitorType Keyword = new("keyword");

    public static readonly MonitorType KeywordAbsence = new("keyword_absence");

    public static readonly MonitorType Ping = new("ping");

    public static readonly MonitorType Tcp = new("tcp");

    public static readonly MonitorType Udp = new("udp");

    public static readonly MonitorType Smtp = new("smtp");

    public static readonly MonitorType Pop = new("pop");

    public static readonly MonitorType Imap = new("imap");

    public static readonly MonitorType Dns = new("dns");

    public static readonly MonitorType Playwright = new("playwright");

    public TResult Match<TResult>(Func<TResult> onStatus,
        Func<TResult> onExpectedStatusCode,
        Func<TResult> onKeyword,
        Func<TResult> onKeywordAbsence,
        Func<TResult> onPing,
        Func<TResult> onTcp,
        Func<TResult> onUdp,
        Func<TResult> onSmtp,
        Func<TResult> onPop,
        Func<TResult> onImap,
        Func<TResult> onDns,
        Func<TResult> onPlaywright,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Status => onStatus(),
            _ when this == ExpectedStatusCode => onExpectedStatusCode(),
            _ when this == Keyword => onKeyword(),
            _ when this == KeywordAbsence => onKeywordAbsence(),
            _ when this == Ping => onPing(),
            _ when this == Tcp => onTcp(),
            _ when this == Udp => onUdp(),
            _ when this == Smtp => onSmtp(),
            _ when this == Pop => onPop(),
            _ when this == Imap => onImap(),
            _ when this == Dns => onDns(),
            _ when this == Playwright => onPlaywright(),
            _ => otherwise(Value)
        };

    public void Match(Action onStatus,
        Action onExpectedStatusCode,
        Action onKeyword,
        Action onKeywordAbsence,
        Action onPing,
        Action onTcp,
        Action onUdp,
        Action onSmtp,
        Action onPop,
        Action onImap,
        Action onDns,
        Action onPlaywright,
        Action<string> otherwise)
    {
        if (this == Status) onStatus();
        else if (this == ExpectedStatusCode) onExpectedStatusCode();
        else if (this == Keyword) onKeyword();
        else if (this == KeywordAbsence) onKeywordAbsence();
        else if (this == Ping) onPing();
        else if (this == Tcp) onTcp();
        else if (this == Udp) onUdp();
        else if (this == Smtp) onSmtp();
        else if (this == Pop) onPop();
        else if (this == Imap) onImap();
        else if (this == Dns) onDns();
        else if (this == Playwright) onPlaywright();
        else otherwise(Value);
    }
}
