using System;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Enum;

namespace SalesforceServiceCloud.Models.Enums;

/// <summary>
/// Reason for the failed transfer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason1>))]
public sealed record Reason1 : OpenStringEnum<Reason1>
{
    private Reason1(string value) : base(value)
    {
    }

    public static readonly Reason1 NoAgentAvailable = new("NoAgentAvailable");

    public static readonly Reason1 Error = new("Error");

    public TResult Match<TResult>(Func<TResult> onNoAgentAvailable,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoAgentAvailable => onNoAgentAvailable(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoAgentAvailable, Action onError, Action<string> otherwise)
    {
        if (this == NoAgentAvailable) onNoAgentAvailable();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
