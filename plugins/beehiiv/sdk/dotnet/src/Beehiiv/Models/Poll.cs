using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record Poll
{
    /// <summary>
    /// The prefixed ID of the poll.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the poll.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The poll question text.
    /// </summary>
    [JsonPropertyName("question")]
    public required string Question { get; init; }

    /// <summary>
    /// An optional description of the poll.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The type of poll.
    /// </summary>
    [JsonPropertyName("poll_type")]
    public required PollType1 PollType { get; init; }

    /// <summary>
    /// The current status of the poll.
    /// </summary>
    [JsonPropertyName("status")]
    public required PollStatus2 Status { get; init; }

    /// <summary>
    /// The time the poll was created. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required int CreatedAt { get; init; }

    /// <summary>
    /// The available choices for this poll.
    /// </summary>
    [JsonPropertyName("poll_choices")]
    public required IReadOnlyList<PollChoice> PollChoices { get; init; }

    /// <summary>
    /// The correct answer for trivia-type polls. Only included when <c>expand[]=trivia_answer</c> is specified and the poll is of type trivia.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trivia_answer")]
    public string? TriviaAnswer { get; init; }

    /// <summary>
    /// Aggregate statistics for the poll. Only included when <c>expand[]=stats</c> is specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public PollStats2? Stats { get; init; }

    /// <summary>
    /// Total number of responses to this poll. Only included when <c>expand[]=poll_responses</c> is specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_responses")]
    public int? TotalResponses { get; init; }

    /// <summary>
    /// Up to 10 most recent subscriber responses. Only included when <c>expand[]=poll_responses</c> is specified. Use /polls/{pollId}/responses for paginated access to all responses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("poll_responses")]
    public IReadOnlyList<PollResponseItem>? PollResponses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
