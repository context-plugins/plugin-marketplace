using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// Schema synchronization mode
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SchemaSyncMode>))]
public sealed record SchemaSyncMode : OpenStringEnum<SchemaSyncMode>
{
    private SchemaSyncMode(string value) : base(value)
    {
    }

    public static readonly SchemaSyncMode Add = new("Add");

    public static readonly SchemaSyncMode ForceSync = new("Force Sync");

    public TResult Match<TResult>(Func<TResult> onAdd, Func<TResult> onForceSync, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Add => onAdd(),
            _ when this == ForceSync => onForceSync(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdd, Action onForceSync, Action<string> otherwise)
    {
        if (this == Add) onAdd();
        else if (this == ForceSync) onForceSync();
        else otherwise(Value);
    }
}
