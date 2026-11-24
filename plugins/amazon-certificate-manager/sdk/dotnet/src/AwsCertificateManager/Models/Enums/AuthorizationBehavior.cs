using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The authorization behavior of the ACME endpoint.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthorizationBehavior>))]
public sealed record AuthorizationBehavior : OpenStringEnum<AuthorizationBehavior>
{
    private AuthorizationBehavior(string value) : base(value)
    {
    }

    public static readonly AuthorizationBehavior PreApproved = new("PRE_APPROVED");

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
