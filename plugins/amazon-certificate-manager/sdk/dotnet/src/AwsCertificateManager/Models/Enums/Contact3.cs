using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The updated contact requirement.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Contact3>))]
public sealed record Contact3 : OpenStringEnum<Contact3>
{
    private Contact3(string value) : base(value)
    {
    }

    public static readonly Contact3 Required = new("REQUIRED");

    public static readonly Contact3 NotRequired = new("NOT_REQUIRED");

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
