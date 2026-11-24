using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Optional. MongoDB JSON mode to use for the stream.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JsonMode>))]
public sealed record JsonMode : OpenStringEnum<JsonMode>
{
    private JsonMode(string value) : base(value)
    {
    }

    public static readonly JsonMode MongodbJsonModeUnspecified = new("MONGODB_JSON_MODE_UNSPECIFIED");

    public static readonly JsonMode Strict = new("STRICT");

    public static readonly JsonMode Canonical = new("CANONICAL");

    public TResult Match<TResult>(Func<TResult> onMongodbJsonModeUnspecified,
        Func<TResult> onStrict,
        Func<TResult> onCanonical,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MongodbJsonModeUnspecified => onMongodbJsonModeUnspecified(),
            _ when this == Strict => onStrict(),
            _ when this == Canonical => onCanonical(),
            _ => otherwise(Value)
        };

    public void Match(Action onMongodbJsonModeUnspecified,
        Action onStrict,
        Action onCanonical,
        Action<string> otherwise)
    {
        if (this == MongodbJsonModeUnspecified) onMongodbJsonModeUnspecified();
        else if (this == Strict) onStrict();
        else if (this == Canonical) onCanonical();
        else otherwise(Value);
    }
}
