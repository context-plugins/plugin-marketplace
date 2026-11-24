using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EndCustomerMappingResultStatus>))]
public sealed record EndCustomerMappingResultStatus : OpenStringEnum<EndCustomerMappingResultStatus>
{
    private EndCustomerMappingResultStatus(string value) : base(value)
    {
    }

    public static readonly EndCustomerMappingResultStatus Mapped = new("mapped");

    public static readonly EndCustomerMappingResultStatus AlreadyMapped = new("already_mapped");

    public static readonly EndCustomerMappingResultStatus Remapped = new("remapped");

    public TResult Match<TResult>(Func<TResult> onMapped,
        Func<TResult> onAlreadyMapped,
        Func<TResult> onRemapped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mapped => onMapped(),
            _ when this == AlreadyMapped => onAlreadyMapped(),
            _ when this == Remapped => onRemapped(),
            _ => otherwise(Value)
        };

    public void Match(Action onMapped, Action onAlreadyMapped, Action onRemapped, Action<string> otherwise)
    {
        if (this == Mapped) onMapped();
        else if (this == AlreadyMapped) onAlreadyMapped();
        else if (this == Remapped) onRemapped();
        else otherwise(Value);
    }
}
