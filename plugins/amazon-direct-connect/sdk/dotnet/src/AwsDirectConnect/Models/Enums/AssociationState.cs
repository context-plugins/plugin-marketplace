using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the association. The following are the possible values: associating: The initial state after calling CreateDirectConnectGatewayAssociation. associated: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic. disassociating: The initial state after calling DeleteDirectConnectGatewayAssociation. disassociated: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AssociationState>))]
public sealed record AssociationState : OpenStringEnum<AssociationState>
{
    private AssociationState(string value) : base(value)
    {
    }

    public static readonly AssociationState Associating = new("associating");

    public static readonly AssociationState Associated = new("associated");

    public static readonly AssociationState Disassociating = new("disassociating");

    public static readonly AssociationState Disassociated = new("disassociated");

    public static readonly AssociationState Updating = new("updating");

    public TResult Match<TResult>(Func<TResult> onAssociating,
        Func<TResult> onAssociated,
        Func<TResult> onDisassociating,
        Func<TResult> onDisassociated,
        Func<TResult> onUpdating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Associating => onAssociating(),
            _ when this == Associated => onAssociated(),
            _ when this == Disassociating => onDisassociating(),
            _ when this == Disassociated => onDisassociated(),
            _ when this == Updating => onUpdating(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssociating,
        Action onAssociated,
        Action onDisassociating,
        Action onDisassociated,
        Action onUpdating,
        Action<string> otherwise)
    {
        if (this == Associating) onAssociating();
        else if (this == Associated) onAssociated();
        else if (this == Disassociating) onDisassociating();
        else if (this == Disassociated) onDisassociated();
        else if (this == Updating) onUpdating();
        else otherwise(Value);
    }
}
