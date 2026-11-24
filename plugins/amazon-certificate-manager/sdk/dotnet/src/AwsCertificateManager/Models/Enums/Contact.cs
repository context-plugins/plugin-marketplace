using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Whether ACME clients must provide contact information during account registration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Contact>))]
public sealed record Contact : OpenStringEnum<Contact>
{
    private Contact(string value) : base(value)
    {
    }

    public static readonly Contact Required = new("REQUIRED");

    public static readonly Contact NotRequired = new("NOT_REQUIRED");

    public TResult Match<TResult>(Func<TResult> onRequired,
        Func<TResult> onNotRequired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Required => onRequired(),
            _ when this == NotRequired => onNotRequired(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequired, Action onNotRequired, Action<string> otherwise)
    {
        if (this == Required) onRequired();
        else if (this == NotRequired) onNotRequired();
        else otherwise(Value);
    }
}
