using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SeatAssignmentStatus>))]
public sealed record SeatAssignmentStatus : OpenStringEnum<SeatAssignmentStatus>
{
    private SeatAssignmentStatus(string value) : base(value)
    {
    }

    public static readonly SeatAssignmentStatus Assigned = new("assigned");

    public static readonly SeatAssignmentStatus Unassigned = new("unassigned");

    public TResult Match<TResult>(Func<TResult> onAssigned,
        Func<TResult> onUnassigned,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Assigned => onAssigned(),
            _ when this == Unassigned => onUnassigned(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssigned, Action onUnassigned, Action<string> otherwise)
    {
        if (this == Assigned) onAssigned();
        else if (this == Unassigned) onUnassigned();
        else otherwise(Value);
    }
}
