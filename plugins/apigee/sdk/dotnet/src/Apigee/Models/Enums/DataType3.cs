using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The type of the data of the attribute.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataType3>))]
public sealed record DataType3 : OpenStringEnum<DataType3>
{
    private DataType3(string value) : base(value)
    {
    }

    public static readonly DataType3 DataTypeUnspecified = new("DATA_TYPE_UNSPECIFIED");

    public static readonly DataType3 Enum = new("ENUM");

    public static readonly DataType3 Json = new("JSON");

    public static readonly DataType3 String = new("STRING");

    public static readonly DataType3 Uri = new("URI");

    public TResult Match<TResult>(Func<TResult> onDataTypeUnspecified,
        Func<TResult> onEnum,
        Func<TResult> onJson,
        Func<TResult> onString,
        Func<TResult> onUri,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataTypeUnspecified => onDataTypeUnspecified(),
            _ when this == Enum => onEnum(),
            _ when this == Json => onJson(),
            _ when this == String => onString(),
            _ when this == Uri => onUri(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataTypeUnspecified,
        Action onEnum,
        Action onJson,
        Action onString,
        Action onUri,
        Action<string> otherwise)
    {
        if (this == DataTypeUnspecified) onDataTypeUnspecified();
        else if (this == Enum) onEnum();
        else if (this == Json) onJson();
        else if (this == String) onString();
        else if (this == Uri) onUri();
        else otherwise(Value);
    }
}
