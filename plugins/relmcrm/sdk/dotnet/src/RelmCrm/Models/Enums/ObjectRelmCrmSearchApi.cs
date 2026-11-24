using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ObjectRelmCrmSearchApi>))]
public sealed record ObjectRelmCrmSearchApi : OpenStringEnum<ObjectRelmCrmSearchApi>
{
    private ObjectRelmCrmSearchApi(string value) : base(value)
    {
    }

    public static readonly ObjectRelmCrmSearchApi Search = new("search");

    public TResult Match<TResult>(Func<TResult> onSearch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Search => onSearch(),
            _ => otherwise(Value)
        };

    public void Match(Action onSearch, Action<string> otherwise)
    {
        if (this == Search) onSearch();
        else otherwise(Value);
    }
}
