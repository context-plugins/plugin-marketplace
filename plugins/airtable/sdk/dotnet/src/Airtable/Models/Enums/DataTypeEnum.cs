using System;
using System.Text.Json.Serialization;
using Airtable.Core.Enum;

namespace Airtable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DataTypeEnum>))]
public sealed record DataTypeEnum : OpenStringEnum<DataTypeEnum>
{
    private DataTypeEnum(string value) : base(value)
    {
    }

    public static readonly DataTypeEnum TableData = new("tableData");

    public static readonly DataTypeEnum TableFields = new("tableFields");

    public static readonly DataTypeEnum TableMetadata = new("tableMetadata");

    public TResult Match<TResult>(Func<TResult> onTableData,
        Func<TResult> onTableFields,
        Func<TResult> onTableMetadata,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TableData => onTableData(),
            _ when this == TableFields => onTableFields(),
            _ when this == TableMetadata => onTableMetadata(),
            _ => otherwise(Value)
        };

    public void Match(Action onTableData, Action onTableFields, Action onTableMetadata, Action<string> otherwise)
    {
        if (this == TableData) onTableData();
        else if (this == TableFields) onTableFields();
        else if (this == TableMetadata) onTableMetadata();
        else otherwise(Value);
    }
}
