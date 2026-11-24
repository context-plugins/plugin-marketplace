using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Source type for the relational database. RDS_HTTP_ENDPOINT: The relational database source type is an Amazon Relational Database Service (Amazon RDS) HTTP endpoint.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RelationalDatabaseSourceType>))]
public sealed record RelationalDatabaseSourceType : OpenStringEnum<RelationalDatabaseSourceType>
{
    private RelationalDatabaseSourceType(string value) : base(value)
    {
    }

    public static readonly RelationalDatabaseSourceType RdsHttpEndpoint = new("RDS_HTTP_ENDPOINT");

    public TResult Match<TResult>(Func<TResult> onRdsHttpEndpoint, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RdsHttpEndpoint => onRdsHttpEndpoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onRdsHttpEndpoint, Action<string> otherwise)
    {
        if (this == RdsHttpEndpoint) onRdsHttpEndpoint();
        else otherwise(Value);
    }
}
