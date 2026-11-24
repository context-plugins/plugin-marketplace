using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// Whether the peers were grouped by industry or the broader sector.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GroupKind>))]
public sealed record GroupKind : OpenStringEnum<GroupKind>
{
    private GroupKind(string value) : base(value)
    {
    }

    public static readonly GroupKind Industry = new("industry");

    public static readonly GroupKind Sector = new("sector");

    public TResult Match<TResult>(Func<TResult> onIndustry, Func<TResult> onSector, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Industry => onIndustry(),
            _ when this == Sector => onSector(),
            _ => otherwise(Value)
        };

    public void Match(Action onIndustry, Action onSector, Action<string> otherwise)
    {
        if (this == Industry) onIndustry();
        else if (this == Sector) onSector();
        else otherwise(Value);
    }
}
