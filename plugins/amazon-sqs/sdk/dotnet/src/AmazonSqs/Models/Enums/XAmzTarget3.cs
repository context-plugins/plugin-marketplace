using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 AmazonSqsListMessageMoveTasks = new("AmazonSQS.ListMessageMoveTasks");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsListMessageMoveTasks, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsListMessageMoveTasks => onAmazonSqsListMessageMoveTasks(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsListMessageMoveTasks, Action<string> otherwise)
    {
        if (this == AmazonSqsListMessageMoveTasks) onAmazonSqsListMessageMoveTasks();
        else otherwise(Value);
    }
}
