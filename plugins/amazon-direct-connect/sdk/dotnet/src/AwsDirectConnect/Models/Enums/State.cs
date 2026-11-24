using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the association. The valid values are associating, associated, disassociating, and disassociated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Associating = new("associating");

    public static readonly State Associated = new("associated");

    public static readonly State Disassociating = new("disassociating");

    public static readonly State Disassociated = new("disassociated");

    public TResult Match<TResult>(Func<TResult> onAssociating,
        Func<TResult> onAssociated,
        Func<TResult> onDisassociating,
        Func<TResult> onDisassociated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Associating => onAssociating(),
            _ when this == Associated => onAssociated(),
            _ when this == Disassociating => onDisassociating(),
            _ when this == Disassociated => onDisassociated(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssociating,
        Action onAssociated,
        Action onDisassociating,
        Action onDisassociated,
        Action<string> otherwise)
    {
        if (this == Associating) onAssociating();
        else if (this == Associated) onAssociated();
        else if (this == Disassociating) onDisassociating();
        else if (this == Disassociated) onDisassociated();
        else otherwise(Value);
    }
}
