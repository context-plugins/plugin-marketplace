using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttributeResourceTypeDto>))]
public sealed record AttributeResourceTypeDto : OpenStringEnum<AttributeResourceTypeDto>
{
    private AttributeResourceTypeDto(string value) : base(value)
    {
    }

    public static readonly AttributeResourceTypeDto Dataset = new("dataset");

    public static readonly AttributeResourceTypeDto Check = new("check");

    public static readonly AttributeResourceTypeDto Column = new("column");

    public TResult Match<TResult>(Func<TResult> onDataset,
        Func<TResult> onCheck,
        Func<TResult> onColumn,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dataset => onDataset(),
            _ when this == Check => onCheck(),
            _ when this == Column => onColumn(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataset, Action onCheck, Action onColumn, Action<string> otherwise)
    {
        if (this == Dataset) onDataset();
        else if (this == Check) onCheck();
        else if (this == Column) onColumn();
        else otherwise(Value);
    }
}
