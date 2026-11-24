using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The class of the event. The class specifies what the event is related to, such as an infrastructure change, a deployment, or a schema change.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventClass>))]
public sealed record EventClass : OpenStringEnum<EventClass>
{
    private EventClass(string value) : base(value)
    {
    }

    public static readonly EventClass Infrastructure = new("INFRASTRUCTURE");

    public static readonly EventClass Deployment = new("DEPLOYMENT");

    public static readonly EventClass SecurityChange = new("SECURITY_CHANGE");

    public static readonly EventClass ConfigChange = new("CONFIG_CHANGE");

    public static readonly EventClass SchemaChange = new("SCHEMA_CHANGE");

    public TResult Match<TResult>(Func<TResult> onInfrastructure,
        Func<TResult> onDeployment,
        Func<TResult> onSecurityChange,
        Func<TResult> onConfigChange,
        Func<TResult> onSchemaChange,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Infrastructure => onInfrastructure(),
            _ when this == Deployment => onDeployment(),
            _ when this == SecurityChange => onSecurityChange(),
            _ when this == ConfigChange => onConfigChange(),
            _ when this == SchemaChange => onSchemaChange(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfrastructure,
        Action onDeployment,
        Action onSecurityChange,
        Action onConfigChange,
        Action onSchemaChange,
        Action<string> otherwise)
    {
        if (this == Infrastructure) onInfrastructure();
        else if (this == Deployment) onDeployment();
        else if (this == SecurityChange) onSecurityChange();
        else if (this == ConfigChange) onConfigChange();
        else if (this == SchemaChange) onSchemaChange();
        else otherwise(Value);
    }
}
