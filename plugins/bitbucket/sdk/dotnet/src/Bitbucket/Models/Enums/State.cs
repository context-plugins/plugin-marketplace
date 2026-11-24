using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Approved = new("approved");

    public static readonly State ChangesRequested = new("changes_requested");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onChangesRequested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved, Action onChangesRequested, Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == ChangesRequested) onChangesRequested();
        else otherwise(Value);
    }
}
