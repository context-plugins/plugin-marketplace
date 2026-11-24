using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Section>))]
public sealed record Section : OpenStringEnum<Section>
{
    private Section(string value) : base(value)
    {
    }

    public static readonly Section Connections = new("connections");

    public static readonly Section DatastoreTables = new("datastoreTables");

    public static readonly Section GlobalVariables = new("globalVariables");

    public TResult Match<TResult>(Func<TResult> onConnections,
        Func<TResult> onDatastoreTables,
        Func<TResult> onGlobalVariables,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Connections => onConnections(),
            _ when this == DatastoreTables => onDatastoreTables(),
            _ when this == GlobalVariables => onGlobalVariables(),
            _ => otherwise(Value)
        };

    public void Match(Action onConnections,
        Action onDatastoreTables,
        Action onGlobalVariables,
        Action<string> otherwise)
    {
        if (this == Connections) onConnections();
        else if (this == DatastoreTables) onDatastoreTables();
        else if (this == GlobalVariables) onGlobalVariables();
        else otherwise(Value);
    }
}
