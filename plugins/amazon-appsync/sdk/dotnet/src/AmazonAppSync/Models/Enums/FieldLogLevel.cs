using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The field logging level. Values can be NONE, ERROR, or ALL. NONE: No field-level logs are captured. ERROR: Logs the following information only for the fields that are in error: The error section in the server response. Field-level errors. The generated request/response functions that got resolved for error fields. ALL: The following information is logged for all fields in the query: Field-level tracing information. The generated request/response functions that got resolved for each field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FieldLogLevel>))]
public sealed record FieldLogLevel : OpenStringEnum<FieldLogLevel>
{
    private FieldLogLevel(string value) : base(value)
    {
    }

    public static readonly FieldLogLevel None = new("NONE");

    public static readonly FieldLogLevel Error = new("ERROR");

    public static readonly FieldLogLevel All = new("ALL");

    public static readonly FieldLogLevel Info = new("INFO");

    public static readonly FieldLogLevel Debug = new("DEBUG");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onError,
        Func<TResult> onAll,
        Func<TResult> onInfo,
        Func<TResult> onDebug,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Error => onError(),
            _ when this == All => onAll(),
            _ when this == Info => onInfo(),
            _ when this == Debug => onDebug(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onError,
        Action onAll,
        Action onInfo,
        Action onDebug,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Error) onError();
        else if (this == All) onAll();
        else if (this == Info) onInfo();
        else if (this == Debug) onDebug();
        else otherwise(Value);
    }
}
