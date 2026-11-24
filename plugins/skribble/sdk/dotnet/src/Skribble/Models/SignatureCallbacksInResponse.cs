using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;
using Skribble.Models.Enums;

namespace Skribble.Models;

public record SignatureCallbacksInResponse
{
    /// <summary>
    /// Signature request's unique ID on Skribble.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signature_request_id")]
    public Guid? SignatureRequestId { get; init; }

    /// <summary>
    /// The type of this callback.
    /// <para>
    /// Possible values:
    ///   - <b>SUCCESS</b> Is triggered when the document has been successfully signed by all parties involved.
    ///   - <b>UPDATE</b> Is triggered on changes on the <c>SignatureRequest</c> object like when one person of all involved parties has signed.
    ///   - <b>INITIATE</b> Is triggered when the signature request is initiated via the endpoint.
    ///   - <b>ERROR</b> Is triggered when a person declines the signature or when the <c>SignatureRequest</c> is withdrawn.
    ///   - <b>START_SIGN</b> Is triggered when a person starts the signature process (only for Express QES).
    ///   - <b>IDENT_PENDING</b> Is triggered when the identification of a person within a signature process requires manual review.
    ///   - <b>IDENT_ERROR</b> Is triggered when the identification of a person within a signature process ended in an error.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public CallbackType? Type { get; init; }

    /// <summary>
    /// The state of the callback.
    /// <para>
    /// Possible values:
    ///   - <b>OPEN</b> The callback request will be executed in the next execution cycle.
    ///   - <b>COMPLETED</b> The callback request was executed successfully. The API received an HTTP 2xx success code in response.
    ///   - <b>RESIGNATED</b> The callback request has been attempted <c>attempts</c> times but was unsuccessful. The API did not receive a valid HTTP 2xx response.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public CallbackState? State { get; init; }

    /// <summary>
    /// The called URL of this callback.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// The attempts this callback was carried out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempts")]
    public int? Attempts { get; init; }

    /// <summary>
    /// Error messages in case that the callback failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public IReadOnlyList<string>? Messages { get; init; }

    /// <summary>
    /// E-mail address of the object owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public string? Owner { get; init; }

    /// <summary>
    /// Users or API keys with read access to the object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("read_access")]
    public IReadOnlyList<string>? ReadAccess { get; init; }

    /// <summary>
    /// Users or API keys with write access to the object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("write_access")]
    public IReadOnlyList<string>? WriteAccess { get; init; }

    /// <summary>
    /// The time at which the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The time at which the object was last changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
