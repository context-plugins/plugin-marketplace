using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason Malformed = new("malformed");

    public static readonly Reason BadSignature = new("bad_signature");

    public static readonly Reason WrongIssuer = new("wrong_issuer");

    public static readonly Reason Expired = new("expired");

    public static readonly Reason WrongAction = new("wrong_action");

    public static readonly Reason InputMismatch = new("input_mismatch");

    public static readonly Reason DestinationMismatch = new("destination_mismatch");

    public static readonly Reason ArtifactMismatch = new("artifact_mismatch");

    public static readonly Reason WrongOrganisation = new("wrong_organisation");

    public static readonly Reason UnsignedDeployment = new("unsigned_deployment");

    public static readonly Reason AgentsStopped = new("agents_stopped");

    public TResult Match<TResult>(Func<TResult> onMalformed,
        Func<TResult> onBadSignature,
        Func<TResult> onWrongIssuer,
        Func<TResult> onExpired,
        Func<TResult> onWrongAction,
        Func<TResult> onInputMismatch,
        Func<TResult> onDestinationMismatch,
        Func<TResult> onArtifactMismatch,
        Func<TResult> onWrongOrganisation,
        Func<TResult> onUnsignedDeployment,
        Func<TResult> onAgentsStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Malformed => onMalformed(),
            _ when this == BadSignature => onBadSignature(),
            _ when this == WrongIssuer => onWrongIssuer(),
            _ when this == Expired => onExpired(),
            _ when this == WrongAction => onWrongAction(),
            _ when this == InputMismatch => onInputMismatch(),
            _ when this == DestinationMismatch => onDestinationMismatch(),
            _ when this == ArtifactMismatch => onArtifactMismatch(),
            _ when this == WrongOrganisation => onWrongOrganisation(),
            _ when this == UnsignedDeployment => onUnsignedDeployment(),
            _ when this == AgentsStopped => onAgentsStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onMalformed,
        Action onBadSignature,
        Action onWrongIssuer,
        Action onExpired,
        Action onWrongAction,
        Action onInputMismatch,
        Action onDestinationMismatch,
        Action onArtifactMismatch,
        Action onWrongOrganisation,
        Action onUnsignedDeployment,
        Action onAgentsStopped,
        Action<string> otherwise)
    {
        if (this == Malformed) onMalformed();
        else if (this == BadSignature) onBadSignature();
        else if (this == WrongIssuer) onWrongIssuer();
        else if (this == Expired) onExpired();
        else if (this == WrongAction) onWrongAction();
        else if (this == InputMismatch) onInputMismatch();
        else if (this == DestinationMismatch) onDestinationMismatch();
        else if (this == ArtifactMismatch) onArtifactMismatch();
        else if (this == WrongOrganisation) onWrongOrganisation();
        else if (this == UnsignedDeployment) onUnsignedDeployment();
        else if (this == AgentsStopped) onAgentsStopped();
        else otherwise(Value);
    }
}
