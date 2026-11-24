using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectRelmCrmCompaniesApi>))]
public sealed record ObjectRelmCrmCompaniesApi : OpenStringEnum<ObjectRelmCrmCompaniesApi>
{
    private ObjectRelmCrmCompaniesApi(string value) : base(value)
    {
    }

    public static readonly ObjectRelmCrmCompaniesApi List = new("list");

    public TResult Match<TResult>(Func<TResult> onList, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action onList, Action<string> otherwise)
    {
        if (this == List) onList();
        else otherwise(Value);
    }
}
