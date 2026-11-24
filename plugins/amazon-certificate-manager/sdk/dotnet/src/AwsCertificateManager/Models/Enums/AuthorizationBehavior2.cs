using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The updated authorization behavior.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthorizationBehavior2>))]
public sealed record AuthorizationBehavior2 : OpenStringEnum<AuthorizationBehavior2>
{
    private AuthorizationBehavior2(string value) : base(value)
    {
    }

    public static readonly AuthorizationBehavior2 PreApproved = new("PRE_APPROVED");

    public TResult Match<TResult>(Func<TResult> onPreApproved, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PreApproved => onPreApproved(),
            _ => otherwise(Value)
        };

    public void Match(Action onPreApproved, Action<string> otherwise)
    {
        if (this == PreApproved) onPreApproved();
        else otherwise(Value);
    }
}
