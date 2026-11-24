using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

/// <summary>
/// Sandbox runtime provider for HUD-managed instances.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RuntimeProviderName>))]
public sealed record RuntimeProviderName : OpenStringEnum<RuntimeProviderName>
{
    private RuntimeProviderName(string value) : base(value)
    {
    }

    public static readonly RuntimeProviderName Ec2 = new("ec2");

    public static readonly RuntimeProviderName Modal = new("modal");

    public TResult Match<TResult>(Func<TResult> onEc2, Func<TResult> onModal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ec2 => onEc2(),
            _ when this == Modal => onModal(),
            _ => otherwise(Value)
        };

    public void Match(Action onEc2, Action onModal, Action<string> otherwise)
    {
        if (this == Ec2) onEc2();
        else if (this == Modal) onModal();
        else otherwise(Value);
    }
}
