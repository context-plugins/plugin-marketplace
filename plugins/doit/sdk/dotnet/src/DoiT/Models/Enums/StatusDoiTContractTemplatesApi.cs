using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDoiTContractTemplatesApi>))]
public sealed record StatusDoiTContractTemplatesApi : OpenStringEnum<StatusDoiTContractTemplatesApi>
{
    private StatusDoiTContractTemplatesApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTContractTemplatesApi Active = new("active");

    public static readonly StatusDoiTContractTemplatesApi Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
