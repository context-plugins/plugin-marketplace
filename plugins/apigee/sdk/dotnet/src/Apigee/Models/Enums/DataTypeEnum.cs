using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Data type of path param
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataTypeEnum>))]
public sealed record DataTypeEnum : OpenStringEnum<DataTypeEnum>
{
    private DataTypeEnum(string value) : base(value)
    {
    }

    public static readonly DataTypeEnum DataTypeUnspecified = new("DATA_TYPE_UNSPECIFIED");

    public static readonly DataTypeEnum Bool = new("BOOL");

    public static readonly DataTypeEnum Integer = new("INTEGER");

    public static readonly DataTypeEnum Float = new("FLOAT");

    public static readonly DataTypeEnum String = new("STRING");

    public static readonly DataTypeEnum Uuid = new("UUID");

    public TResult Match<TResult>(Func<TResult> onDataTypeUnspecified,
        Func<TResult> onBool,
        Func<TResult> onInteger,
        Func<TResult> onFloat,
        Func<TResult> onString,
        Func<TResult> onUuid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataTypeUnspecified => onDataTypeUnspecified(),
            _ when this == Bool => onBool(),
            _ when this == Integer => onInteger(),
            _ when this == Float => onFloat(),
            _ when this == String => onString(),
            _ when this == Uuid => onUuid(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataTypeUnspecified,
        Action onBool,
        Action onInteger,
        Action onFloat,
        Action onString,
        Action onUuid,
        Action<string> otherwise)
    {
        if (this == DataTypeUnspecified) onDataTypeUnspecified();
        else if (this == Bool) onBool();
        else if (this == Integer) onInteger();
        else if (this == Float) onFloat();
        else if (this == String) onString();
        else if (this == Uuid) onUuid();
        else otherwise(Value);
    }
}
