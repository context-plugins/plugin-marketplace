using System;

namespace AmazonFreeRtos.Core.Models;

internal abstract record SerializationFormat
{
    /// <summary>
    ///     Example: variableName[0] = value1
    /// </summary>
    public static readonly SerializationFormat Indexed = new Repeated((key, index) => $"{key}[{index}]");

    /// <summary>
    ///     Example: variableName[] = value1
    /// </summary>
    public static readonly SerializationFormat UnIndexed = new Repeated((key, _) => $"{key}[]");

    /// <summary>
    ///     Example: variableName = value1, variableName = value 2
    /// </summary>
    public static readonly SerializationFormat Plain = new Repeated((key, _) => key);

    /// <summary>
    ///     Example: variableName = value1,value2
    /// </summary>
    public static readonly SerializationFormat Csv = new Delimited(",");

    /// <summary>
    ///     Example: variableName = value1 \t value2
    /// </summary>
    public static readonly SerializationFormat Tsv = new Delimited("\t");

    /// <summary>
    ///     Example: variableName = value1|value2
    /// </summary>
    public static readonly SerializationFormat Psv = new Delimited("|");

    public static readonly SerializationFormat Ssv = new Delimited(" ");

    private SerializationFormat() { }

    public sealed record Delimited(string Delimiter) : SerializationFormat;

    public sealed record Repeated(Func<string, int, string> ItemKey) : SerializationFormat;
}
