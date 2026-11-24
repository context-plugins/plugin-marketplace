using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Data type of the field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeBoomiDataHubModelsApi>))]
public sealed record TypeBoomiDataHubModelsApi : OpenStringEnum<TypeBoomiDataHubModelsApi>
{
    private TypeBoomiDataHubModelsApi(string value) : base(value)
    {
    }

    public static readonly TypeBoomiDataHubModelsApi String = new("STRING");

    public static readonly TypeBoomiDataHubModelsApi Integer = new("INTEGER");

    public static readonly TypeBoomiDataHubModelsApi Float = new("FLOAT");

    public static readonly TypeBoomiDataHubModelsApi Boolean = new("BOOLEAN");

    public static readonly TypeBoomiDataHubModelsApi Date = new("DATE");

    public static readonly TypeBoomiDataHubModelsApi Datetime = new("DATETIME");

    public static readonly TypeBoomiDataHubModelsApi Reference = new("REFERENCE");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onInteger,
        Func<TResult> onFloat,
        Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<TResult> onDatetime,
        Func<TResult> onReference,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Integer => onInteger(),
            _ when this == Float => onFloat(),
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ when this == Datetime => onDatetime(),
            _ when this == Reference => onReference(),
            _ => otherwise(Value)
        };

    public void Match(Action onString,
        Action onInteger,
        Action onFloat,
        Action onBoolean,
        Action onDate,
        Action onDatetime,
        Action onReference,
        Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Integer) onInteger();
        else if (this == Float) onFloat();
        else if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else if (this == Datetime) onDatetime();
        else if (this == Reference) onReference();
        else otherwise(Value);
    }
}
