using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of object, account.
/// </summary>
[JsonConverter(typeof(AccountConverter))]
public record Account
{
    public required ObjectModel ObjectModel { get; init; }

    public required AccountProperties AccountProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out ObjectModel objectModel, out AccountProperties accountProperties)
    {
        objectModel = ObjectModel;
        accountProperties = AccountProperties;
    }

    public static implicit operator ObjectModel(Account value) => value.ObjectModel;

    public static implicit operator AccountProperties(Account value) => value.AccountProperties;
}

file class AccountConverter : JsonConverter<Account>
{
    public override Account Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var accountProperties = root.Deserialize<AccountProperties>(options) ??
            throw new JsonException("Failed to deserialize AccountProperties");
        var extras =
            AdditionalProperties.SharedBy(objectModel.AdditionalProperties, accountProperties.AdditionalProperties);
        objectModel.AdditionalProperties.Clear();
        accountProperties.AdditionalProperties.Clear();
        return new Account
        {
            ObjectModel = objectModel,
            AccountProperties = accountProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Account value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.AccountProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
