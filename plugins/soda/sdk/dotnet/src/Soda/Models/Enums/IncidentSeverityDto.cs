using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IncidentSeverityDto>))]
public sealed record IncidentSeverityDto : OpenStringEnum<IncidentSeverityDto>
{
    private IncidentSeverityDto(string value) : base(value)
    {
    }

    public static readonly IncidentSeverityDto Minor = new("minor");

    public static readonly IncidentSeverityDto Major = new("major");

    public static readonly IncidentSeverityDto Critical = new("critical");

    public TResult Match<TResult>(Func<TResult> onMinor,
        Func<TResult> onMajor,
        Func<TResult> onCritical,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Minor => onMinor(),
            _ when this == Major => onMajor(),
            _ when this == Critical => onCritical(),
            _ => otherwise(Value)
        };

    public void Match(Action onMinor, Action onMajor, Action onCritical, Action<string> otherwise)
    {
        if (this == Minor) onMinor();
        else if (this == Major) onMajor();
        else if (this == Critical) onCritical();
        else otherwise(Value);
    }
}
