using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The type of attachment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttachmentType>))]
public sealed record AttachmentType : OpenStringEnum<AttachmentType>
{
    private AttachmentType(string value) : base(value)
    {
    }

    public static readonly AttachmentType TransitVirtualInterface = new("TransitVirtualInterface");

    public static readonly AttachmentType PrivateVirtualInterface = new("PrivateVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onTransitVirtualInterface,
        Func<TResult> onPrivateVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TransitVirtualInterface => onTransitVirtualInterface(),
            _ when this == PrivateVirtualInterface => onPrivateVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransitVirtualInterface, Action onPrivateVirtualInterface, Action<string> otherwise)
    {
        if (this == TransitVirtualInterface) onTransitVirtualInterface();
        else if (this == PrivateVirtualInterface) onPrivateVirtualInterface();
        else otherwise(Value);
    }
}
