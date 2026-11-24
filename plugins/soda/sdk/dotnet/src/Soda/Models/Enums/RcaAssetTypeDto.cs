using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RcaAssetTypeDto>))]
public sealed record RcaAssetTypeDto : OpenStringEnum<RcaAssetTypeDto>
{
    private RcaAssetTypeDto(string value) : base(value)
    {
    }

    public static readonly RcaAssetTypeDto Dataset = new("dataset");

    public static readonly RcaAssetTypeDto Datasource = new("datasource");

    public TResult Match<TResult>(Func<TResult> onDataset,
        Func<TResult> onDatasource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dataset => onDataset(),
            _ when this == Datasource => onDatasource(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataset, Action onDatasource, Action<string> otherwise)
    {
        if (this == Dataset) onDataset();
        else if (this == Datasource) onDatasource();
        else otherwise(Value);
    }
}
