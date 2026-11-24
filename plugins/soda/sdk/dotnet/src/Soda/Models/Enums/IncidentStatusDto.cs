using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IncidentStatusDto>))]
public sealed record IncidentStatusDto : OpenStringEnum<IncidentStatusDto>
{
    private IncidentStatusDto(string value) : base(value)
    {
    }

    public static readonly IncidentStatusDto Reported = new("reported");

    public static readonly IncidentStatusDto Investigating = new("investigating");

    public static readonly IncidentStatusDto Fixing = new("fixing");

    public static readonly IncidentStatusDto Resolved = new("resolved");

    public TResult Match<TResult>(Func<TResult> onReported,
        Func<TResult> onInvestigating,
        Func<TResult> onFixing,
        Func<TResult> onResolved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Reported => onReported(),
            _ when this == Investigating => onInvestigating(),
            _ when this == Fixing => onFixing(),
            _ when this == Resolved => onResolved(),
            _ => otherwise(Value)
        };

    public void Match(Action onReported,
        Action onInvestigating,
        Action onFixing,
        Action onResolved,
        Action<string> otherwise)
    {
        if (this == Reported) onReported();
        else if (this == Investigating) onInvestigating();
        else if (this == Fixing) onFixing();
        else if (this == Resolved) onResolved();
        else otherwise(Value);
    }
}
