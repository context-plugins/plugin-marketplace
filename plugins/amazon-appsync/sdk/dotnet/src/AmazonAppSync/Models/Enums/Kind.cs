using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The resolver type. UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source. PIPELINE: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of Function objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Unit = new("UNIT");

    public static readonly Kind Pipeline = new("PIPELINE");

    public TResult Match<TResult>(Func<TResult> onUnit, Func<TResult> onPipeline, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unit => onUnit(),
            _ when this == Pipeline => onPipeline(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnit, Action onPipeline, Action<string> otherwise)
    {
        if (this == Unit) onUnit();
        else if (this == Pipeline) onPipeline();
        else otherwise(Value);
    }
}
