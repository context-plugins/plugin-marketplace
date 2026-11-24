using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The case of an object name in an Amazon S3 bucket. For ClientSpecified, the client determines the case sensitivity. For CaseSensitive, the gateway determines the case sensitivity. The default value is ClientSpecified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CaseSensitivity>))]
public sealed record CaseSensitivity : OpenStringEnum<CaseSensitivity>
{
    private CaseSensitivity(string value) : base(value)
    {
    }

    public static readonly CaseSensitivity ClientSpecified = new("ClientSpecified");

    public static readonly CaseSensitivity CaseSensitive = new("CaseSensitive");

    public TResult Match<TResult>(Func<TResult> onClientSpecified,
        Func<TResult> onCaseSensitive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClientSpecified => onClientSpecified(),
            _ when this == CaseSensitive => onCaseSensitive(),
            _ => otherwise(Value)
        };

    public void Match(Action onClientSpecified, Action onCaseSensitive, Action<string> otherwise)
    {
        if (this == ClientSpecified) onClientSpecified();
        else if (this == CaseSensitive) onCaseSensitive();
        else otherwise(Value);
    }
}
