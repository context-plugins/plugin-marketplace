using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The Status of the issue
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTCloudIncidentsApi>))]
public sealed record StatusDoiTCloudIncidentsApi : OpenStringEnum<StatusDoiTCloudIncidentsApi>
{
    private StatusDoiTCloudIncidentsApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTCloudIncidentsApi Active = new("active");

    public static readonly StatusDoiTCloudIncidentsApi Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
