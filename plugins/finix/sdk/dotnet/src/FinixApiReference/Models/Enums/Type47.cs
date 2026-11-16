using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of the <c>Compliance Form</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type47>))]
public sealed record Type47 : OpenStringEnum<Type47>
{
    private Type47(string value) : base(value)
    {
    }

    public static readonly Type47 PciSaqA = new("PCI_SAQ_A");

    public TResult Match<TResult>(Func<TResult> onPciSaqA, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PciSaqA => onPciSaqA(),
            _ => otherwise(Value)
        };

    public void Match(Action onPciSaqA, Action<string> otherwise)
    {
        if (this == PciSaqA) onPciSaqA();
        else otherwise(Value);
    }
}
