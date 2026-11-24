using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, account1.
/// </summary>
[JsonConverter(typeof(Account1Converter))]
public record Account1
{
    public required ObjectModel ObjectModel { get; init; }

    public required Account1Properties Account1Properties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out Account1Properties account1Properties)
    {
        objectModel = ObjectModel;
        account1Properties = Account1Properties;
    }

    public static implicit operator ObjectModel(Account1 value) => value.ObjectModel;

    public static implicit operator Account1Properties(Account1 value) => value.Account1Properties;
}

file class Account1Converter : JsonConverter<Account1>
{
    public override Account1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var account1Properties = root.Deserialize<Account1Properties>(options) ??
            throw new JsonException("Failed to deserialize Account1Properties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, account1Properties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        account1Properties.AdditionalProperties.Clear();
        return new Account1
        {
            ObjectModel = objectModel,
            Account1Properties = account1Properties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Account1 value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.Account1Properties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
