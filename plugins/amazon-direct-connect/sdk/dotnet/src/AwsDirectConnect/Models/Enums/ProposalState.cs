using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the proposal. The following are possible values: accepted: The proposal has been accepted. The Direct Connect gateway association is available to use in this state. deleted: The proposal has been deleted by the owner that made the proposal. The Direct Connect gateway association cannot be used in this state. requested: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ProposalState>))]
public sealed record ProposalState : OpenStringEnum<ProposalState>
{
    private ProposalState(string value) : base(value)
    {
    }

    public static readonly ProposalState Requested = new("requested");

    public static readonly ProposalState Accepted = new("accepted");

    public static readonly ProposalState Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onRequested,
        Func<TResult> onAccepted,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Requested => onRequested(),
            _ when this == Accepted => onAccepted(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequested, Action onAccepted, Action onDeleted, Action<string> otherwise)
    {
        if (this == Requested) onRequested();
        else if (this == Accepted) onAccepted();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
