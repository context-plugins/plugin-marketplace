using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// The CAS (Collateral Auction Session / Closing Auction Session) status of the segment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1OpenApiDefinitionMarketHolidaysAndTimingsApi>))]
public sealed record Status1OpenApiDefinitionMarketHolidaysAndTimingsApi : OpenStringEnum<Status1OpenApiDefinitionMarketHolidaysAndTimingsApi>
{
    private Status1OpenApiDefinitionMarketHolidaysAndTimingsApi(string value) : base(value)
    {
    }

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi NormalOpen = new("NORMAL_OPEN");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi NormalClose = new("NORMAL_CLOSE");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi PreOpenStart = new("PRE_OPEN_START");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi PreOpenEnd = new("PRE_OPEN_END");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi ClosingStart = new("CLOSING_START");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi ClosingEnd = new("CLOSING_END");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi CtsClose = new("CTS_CLOSE");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi CasLmStart = new("CAS_LM_START");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi CasMStop = new("CAS_M_STOP");

    public static readonly Status1OpenApiDefinitionMarketHolidaysAndTimingsApi CasStop = new("CAS_STOP");

    public TResult Match<TResult>(Func<TResult> onNormalOpen,
        Func<TResult> onNormalClose,
        Func<TResult> onPreOpenStart,
        Func<TResult> onPreOpenEnd,
        Func<TResult> onClosingStart,
        Func<TResult> onClosingEnd,
        Func<TResult> onCtsClose,
        Func<TResult> onCasLmStart,
        Func<TResult> onCasMStop,
        Func<TResult> onCasStop,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NormalOpen => onNormalOpen(),
            _ when this == NormalClose => onNormalClose(),
            _ when this == PreOpenStart => onPreOpenStart(),
            _ when this == PreOpenEnd => onPreOpenEnd(),
            _ when this == ClosingStart => onClosingStart(),
            _ when this == ClosingEnd => onClosingEnd(),
            _ when this == CtsClose => onCtsClose(),
            _ when this == CasLmStart => onCasLmStart(),
            _ when this == CasMStop => onCasMStop(),
            _ when this == CasStop => onCasStop(),
            _ => otherwise(Value)
        };

    public void Match(Action onNormalOpen,
        Action onNormalClose,
        Action onPreOpenStart,
        Action onPreOpenEnd,
        Action onClosingStart,
        Action onClosingEnd,
        Action onCtsClose,
        Action onCasLmStart,
        Action onCasMStop,
        Action onCasStop,
        Action<string> otherwise)
    {
        if (this == NormalOpen) onNormalOpen();
        else if (this == NormalClose) onNormalClose();
        else if (this == PreOpenStart) onPreOpenStart();
        else if (this == PreOpenEnd) onPreOpenEnd();
        else if (this == ClosingStart) onClosingStart();
        else if (this == ClosingEnd) onClosingEnd();
        else if (this == CtsClose) onCtsClose();
        else if (this == CasLmStart) onCasLmStart();
        else if (this == CasMStop) onCasMStop();
        else if (this == CasStop) onCasStop();
        else otherwise(Value);
    }
}
