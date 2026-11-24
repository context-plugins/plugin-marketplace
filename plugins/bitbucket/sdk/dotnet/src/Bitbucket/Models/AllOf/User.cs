using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of account, object, user.
/// </summary>
[JsonConverter(typeof(UserConverter))]
public record User
{
    public required Account Account { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required UserProperties UserProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out Account account, out ObjectModel objectModel, out UserProperties userProperties)
    {
        account = Account;
        objectModel = ObjectModel;
        userProperties = UserProperties;
    }

    public static implicit operator Account(User value) => value.Account;

    public static implicit operator ObjectModel(User value) => value.ObjectModel;

    public static implicit operator UserProperties(User value) => value.UserProperties;
}

file class UserConverter : JsonConverter<User>
{
    public override User Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var account = root.Deserialize<Account>(options) ?? throw new JsonException("Failed to deserialize Account");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var userProperties = root.Deserialize<UserProperties>(options) ??
            throw new JsonException("Failed to deserialize UserProperties");
        var extras =
            AdditionalProperties.SharedBy(
                account.AdditionalProperties,
                objectModel.AdditionalProperties,
                userProperties.AdditionalProperties);
        account.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        userProperties.AdditionalProperties.Clear();
        return new User
        {
            Account = account,
            ObjectModel = objectModel,
            UserProperties = userProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, User value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.Account, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.UserProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
