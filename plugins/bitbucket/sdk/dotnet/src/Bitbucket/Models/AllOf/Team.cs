using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;

namespace Bitbucket.Models.AllOf;

/// <summary>
/// All Of account, object, team.
/// </summary>
[JsonConverter(typeof(TeamConverter))]
public record Team
{
    public required Account Account { get; init; }

    public required ObjectModel ObjectModel { get; init; }

    public required TeamProperties TeamProperties { get; init; }

    public AdditionalProperties AdditionalProperties { get; init; } = [];

    public void Deconstruct(out Account account, out ObjectModel objectModel, out TeamProperties teamProperties)
    {
        account = Account;
        objectModel = ObjectModel;
        teamProperties = TeamProperties;
    }

    public static implicit operator Account(Team value) => value.Account;

    public static implicit operator ObjectModel(Team value) => value.ObjectModel;

    public static implicit operator TeamProperties(Team value) => value.TeamProperties;
}

file class TeamConverter : JsonConverter<Team>
{
    public override Team Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        var account = root.Deserialize<Account>(options) ?? throw new JsonException("Failed to deserialize Account");
        var objectModel = root.Deserialize<ObjectModel>(options) ??
            throw new JsonException("Failed to deserialize ObjectModel");
        var teamProperties = root.Deserialize<TeamProperties>(options) ??
            throw new JsonException("Failed to deserialize TeamProperties");
        var extras =
            AdditionalProperties.SharedBy(
                account.AdditionalProperties,
                objectModel.AdditionalProperties,
                teamProperties.AdditionalProperties);
        account.AdditionalProperties.Clear();
        objectModel.AdditionalProperties.Clear();
        teamProperties.AdditionalProperties.Clear();
        return new Team
        {
            Account = account,
            ObjectModel = objectModel,
            TeamProperties = teamProperties,
            AdditionalProperties = extras,
        };
    }

    public override void Write(Utf8JsonWriter writer, Team value, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        var written = new HashSet<string>(StringComparer.Ordinal);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.Account, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.ObjectModel, options), written);
        writer.WriteUnwritten(JsonSerializer.SerializeToElement(value.TeamProperties, options), written);
        writer.WriteUnwritten(value.AdditionalProperties, written);
        writer.WriteEndObject();
    }
}
