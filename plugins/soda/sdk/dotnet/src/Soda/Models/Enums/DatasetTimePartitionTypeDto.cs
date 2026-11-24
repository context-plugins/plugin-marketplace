using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DatasetTimePartitionTypeDto>))]
public sealed record DatasetTimePartitionTypeDto : OpenStringEnum<DatasetTimePartitionTypeDto>
{
    private DatasetTimePartitionTypeDto(string value) : base(value)
    {
    }

    public static readonly DatasetTimePartitionTypeDto Disabled = new("disabled");

    public static readonly DatasetTimePartitionTypeDto PartitionColumn = new("partitionColumn");

    public static readonly DatasetTimePartitionTypeDto SqlExpression = new("sqlExpression");

    public TResult Match<TResult>(Func<TResult> onDisabled,
        Func<TResult> onPartitionColumn,
        Func<TResult> onSqlExpression,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disabled => onDisabled(),
            _ when this == PartitionColumn => onPartitionColumn(),
            _ when this == SqlExpression => onSqlExpression(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisabled, Action onPartitionColumn, Action onSqlExpression, Action<string> otherwise)
    {
        if (this == Disabled) onDisabled();
        else if (this == PartitionColumn) onPartitionColumn();
        else if (this == SqlExpression) onSqlExpression();
        else otherwise(Value);
    }
}
