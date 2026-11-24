using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Search = new("search");

    public static readonly TypeEnum BatchDetail = new("batch_detail");

    public static readonly TypeEnum ChainedSearchDetail = new("chained_search_detail");

    public static readonly TypeEnum BuildingUnits = new("building_units");

    public TResult Match<TResult>(Func<TResult> onSearch,
        Func<TResult> onBatchDetail,
        Func<TResult> onChainedSearchDetail,
        Func<TResult> onBuildingUnits,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Search => onSearch(),
            _ when this == BatchDetail => onBatchDetail(),
            _ when this == ChainedSearchDetail => onChainedSearchDetail(),
            _ when this == BuildingUnits => onBuildingUnits(),
            _ => otherwise(Value)
        };

    public void Match(Action onSearch,
        Action onBatchDetail,
        Action onChainedSearchDetail,
        Action onBuildingUnits,
        Action<string> otherwise)
    {
        if (this == Search) onSearch();
        else if (this == BatchDetail) onBatchDetail();
        else if (this == ChainedSearchDetail) onChainedSearchDetail();
        else if (this == BuildingUnits) onBuildingUnits();
        else otherwise(Value);
    }
}
