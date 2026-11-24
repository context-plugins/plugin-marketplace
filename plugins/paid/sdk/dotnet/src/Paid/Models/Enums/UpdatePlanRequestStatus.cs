using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// Set to <c>archived</c> to archive this plan, or <c>active</c> to restore it.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UpdatePlanRequestStatus>))]
public sealed record UpdatePlanRequestStatus : OpenStringEnum<UpdatePlanRequestStatus>
{
    private UpdatePlanRequestStatus(string value) : base(value)
    {
    }

    public static readonly UpdatePlanRequestStatus Active = new("active");

    public static readonly UpdatePlanRequestStatus Archived = new("archived");

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
