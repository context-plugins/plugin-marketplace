using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The state of the attachment. The following are the possible values: attaching: The initial state after a virtual interface is created using the Direct Connect gateway. attached: The Direct Connect gateway and virtual interface are attached and ready to pass traffic. detaching: The initial state after calling DeleteVirtualInterface. detached: The virtual interface is detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual interface is stopped.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttachmentState>))]
public sealed record AttachmentState : OpenStringEnum<AttachmentState>
{
    private AttachmentState(string value) : base(value)
    {
    }

    public static readonly AttachmentState Attaching = new("attaching");

    public static readonly AttachmentState Attached = new("attached");

    public static readonly AttachmentState Detaching = new("detaching");

    public static readonly AttachmentState Detached = new("detached");

    public TResult Match<TResult>(Func<TResult> onAttaching,
        Func<TResult> onAttached,
        Func<TResult> onDetaching,
        Func<TResult> onDetached,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Attaching => onAttaching(),
            _ when this == Attached => onAttached(),
            _ when this == Detaching => onDetaching(),
            _ when this == Detached => onDetached(),
            _ => otherwise(Value)
        };

    public void Match(Action onAttaching,
        Action onAttached,
        Action onDetaching,
        Action onDetached,
        Action<string> otherwise)
    {
        if (this == Attaching) onAttaching();
        else if (this == Attached) onAttached();
        else if (this == Detaching) onDetaching();
        else if (this == Detached) onDetached();
        else otherwise(Value);
    }
}
